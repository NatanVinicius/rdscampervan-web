export interface VanType {
	id: number;
	name: string;
	description: string;
	price: number;
	coverImage: string;
	details: {
		kilometersDetail: number;
		features: string;
		city: string;
		capacityDetail: number;
		imagesDetail: string[];
	};
}
