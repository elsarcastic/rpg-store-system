import { Modal } from "@/components/Modal/Modal";

export interface ModalMoedasProps {
    setIsOpen: (bool: boolean) => void;
}


export function ModalMoedas({ setIsOpen }: ModalMoedasProps) {
    return (
        <Modal handleClose={() => setIsOpen(false)} modalId="ModalMoedas" >
            <div>oi</div>
        </Modal>
    )
}