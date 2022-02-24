class CommicBookCharacter {
  // data members
  alias: string; // public
  public health: number; //public hence not required to use public keyword
  strength: number;
  private secretIdentity: string;

  //param constructor
  constructor(alias, health, strength, secretIdentity) {}

  //methods
  attackFunc(opponent: Opponent, attackWith: number) {
    opponent.health -= attackWith;
    console.log(`${this.alias} attacked ${opponent.health}`);
  }

  //static methods
  static createTeam(teamName: string, member: CommicBookCharacter[]) {
    return {
      name: teamName,
      member: member,
    };
  }
}

//create object for your class
let team1 = new CommicBookCharacter('A', 100, 100, 'abc');
let team2 = new CommicBookCharacter('A', 100, 100, 'abc');

// to access static members of class
let team = CommicBookCharacter.createTeam('Storm', [team1, team2]);

interface Opponent {
  health: number;
}
