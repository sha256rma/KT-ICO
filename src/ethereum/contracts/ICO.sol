pragma solidity ^0.6.0;

library SafeMath {

    /**
    * @dev Multiplies two numbers, reverts on overflow.
    */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "Multiplication not possible");
        return c;
    }

    /**
    * @dev Integer division of two numbers truncating the quotient, reverts on division by zero.
    */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0, "Division not possible"); // Solidity only automatically asserts when dividing by 0
        uint256 c = a / b;
        return c;
    }

    /**
    * @dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).
    */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "Subtraction not possible");
        uint256 c = a - b;
        return c;
    }

    /**
    * @dev Adds two numbers, reverts on overflow.
    */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "Addition not possible");
        return c;
    }

    /**
    * @dev Divides two numbers and returns the remainder (unsigned integer modulo),
    * reverts when dividing by zero.
    */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0, "Modulo not possible");
        return a % b;
    }
}

contract ICO {

    using SafeMath for uint256;
    
    string public name; //name of token
    string public symbol; //(TICKR) symbol of token
    uint256 public decimals; //deceimal places of our currency
    uint256 public icoEnds;
    uint256 public icoStarts;
    uint256 public allContributors; //keeps count of all the contributors
    uint256 private allTokens; //all tokens that our ICO has generated
    address payable admin; //creator of smart contract
    mapping (address => uint256) public balances; //the amount of money a specific address has
    mapping(address => mapping(address => uint256)) allowed; //from ERC20Interface
    
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    function EtherToKT() internal pure returns(uint) { 
        //one ether is 100 KT (change later)
        return 100;
    }
    
    constructor() public {
        name = "KARTI";
        decimals = 18;
        symbol = "KT";
        icoEnds = now + 8 weeks;
        icoStarts = now;
        allTokens = 1000000000000000000 * EtherToKT(); //equals 1 ether
        admin = (msg.sender);
        balances[msg.sender] = allTokens;
    }
    
    function buyToken() public payable {
        
        uint256 tokens; //the tokens we want to create
        tokens = msg.value.mul(EtherToKT());
        balances[msg.sender] = balances[msg.sender].add(tokens);
        allTokens = allTokens.add(tokens); //increase the total supply of tokens now
        emit Transfer(address(0), msg.sender, tokens);
        
        allContributors++;
    }
    
    function myBalance() public view returns(uint) {
        return balances[msg.sender];
    }
    
    function myAddress() public view returns(address) {
        return msg.sender;
    }
    
    //made for creator of smart contract (me) to collect ICO money
    function endSale() public {
        
        require(msg.sender == admin);
        admin.transfer(address(this).balance); //transfer all the ICO amount to admin's account
    }
    
    //Total number of tokens in existence
    function totalSupply() public view returns(uint256) {
        return allTokens;
    }
    
    // ------------------------------------------------------------------------
    // Get the token balance for account `tokenOwner`
    // ------------------------------------------------------------------------
    function balanceOf(address owner) public view returns(uint256) {
        return balances[owner];
    }

    // ------------------------------------------------------------------------
    // Transfer the balance from token owner's account to `to` account
    // - Owner's account must have sufficient balance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transfer(address to, uint256 tokens) public returns(bool) {
        
        require(tokens <= balances[msg.sender]);
        require(to != address(0));
        
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account
    //
    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
    // recommends that there are no checks for the approval double-spend attack
    // as this should be implemented in user interfaces 
    // ------------------------------------------------------------------------
    function approve(address spender, uint256 tokens) public returns(bool) {
        
        require(spender != address(0));
        
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Transfer `tokens` from the `from` account to the `to` account
    // 
    // The calling account must already have sufficient tokens approve(...)-d
    // for spending from the `from` account and
    // - From account must have sufficient balance to transfer
    // - Spender must have sufficient allowance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transferFrom(address from, address to, uint256 tokens) public returns(bool) {
        
        require(tokens <= balances[from]);
        require(tokens <= allowed[from][msg.sender]);
        require(to != address(0));
        
        balances[from] = balances[from].sub(tokens);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(from, to, tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Returns the amount of tokens approved by the owner that can be
    // transferred to the spender's account
    // ------------------------------------------------------------------------
    function allowance(address owner, address spender) public view returns(uint256) {
        return allowed[owner][spender];
    }
}