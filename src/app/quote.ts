export class Quote {
    showDescription: boolean;
    constructor(public author: string,public id:number, public name: string,public title: string, public quote: string, public createdDate: Date,public likes:number, public dislikes:number) {
      this.showDescription = false;
}
}