class myclass{
  name
  id
  number
  constructor(name:string,id:number){
    this.name = name
    this.id = id
      }

    getName(){
      console.log(`${this.name} and ${this.id}`)
    }
}



class myNewClass extends myclass{
  mobileNUmber
  sub

  constructor(name,id,mobileNUmber:any,sub:string){
    super(name,id)
    this.mobileNUmber = mobileNUmber
    this.sub = sub
  }
}

let result = new myNewClass("rankit",24,7974709574,"phy")
result.getName()



