export class Product {
	Id: string;
	PartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	Active: boolean;
	VendorId: string;

	constructor(
		Id: string,
		PartNumber: string,
		Name: string,
		Price: number,
		Unit: string,
		PhotoPath: string,
		Active: boolean,
		VendorId: string
		){
		this.Id =  Id;
		this.PartNumber = PartNumber;
		this.Name = Name;
		this.Price = Price; 
		this.Unit = Unit;
		this.PhotoPath = PhotoPath;
		this.Active = Active;
		this.VendorId = VendorId;
	}
}