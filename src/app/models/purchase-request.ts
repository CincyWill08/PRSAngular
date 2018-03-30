export class PurchaseRequest {
	Id: string;
	Description: string;
	Justification: string;
	DeliveryMode: string;
	Status: string;
	Total: number;
	Active: boolean;
	ReasonForRejection: string;
	UserId: string;

	constructor(
		Id: string,
		Description: string,
		Justification: string,
		DeliveryMode: string,
		Status: string;
		Total: number,
		Active: boolean,
		ReasonForRejection: string,
		UserId: string
		){
		this.Id =  Id;
		this.Description = Description;
		this.Justification = Justification;
		this.DeliveryMode = DeliveryMode;
		this.Status = Status; 
		this.Active = Active;
		this.ReasonForRejection = ReasonForRejection;
		this.UserId = UserId;
	}
}