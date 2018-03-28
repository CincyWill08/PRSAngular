export class PurchaseRequestLineItem {
	Id: string;
	Quantity: number;
	Active: boolean;
	PurchaseRequestId: string;
	ProductId: string;

	constructor(
		Id: string,
		Quantity: number,
		Active: boolean,
		PurchaseRequestId: string,
		ProductId: string
		){
		this.Id =  Id;
		this.Quantity = Quantity;
		this.Active = Active;
		this.PurchaseRequestId = PurchaseRequestId;
		this.ProductId = ProductId;
	}
}