export class Categories{
  _id?:string;
  name: string;


  constructor(_id?: string, name?:string){
    this._id = _id!;
    this.name = name!;
  }
  }
