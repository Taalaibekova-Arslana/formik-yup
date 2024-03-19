import React from "react";
import ReactDOM from "react-dom";
import { ReactNode } from "react";
import scss from "./Modalka.module.scss";
import { Button } from "@mui/material";
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<div className={scss.modalOverlay}>
			<div className={scss.modal}>
				<Button
					style={{ marginBottom: "30px" }}
					className={scss.modalClose}
					variant="outlined"
					color="error"
					onClick={onClose}>
					Закрыть
				</Button>
				{children}
			</div>
		</div>,
		document.getElementById("modal-root")!
	);
};
export default Modal;
