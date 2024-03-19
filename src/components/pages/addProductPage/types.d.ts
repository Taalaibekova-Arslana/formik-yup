interface FormValues {
	productName: string;
	quantity: number;
	price: number;
	photoUrl: string;
}

interface ProductFormProps {
	closeModal: () => void;
}
