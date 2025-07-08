import { ReactNode } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
    modalId: string;
    handleClose: () => void;
    children: ReactNode
}

export function Modal({ modalId, handleClose, children, ...rest }: ModalProps) {
    return (
        <div id={modalId}>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-55"></div>
            <div className="z-20 absolute w-[70vw] h-[70vh] rounded-xl flex">
                <div {...rest}>
                    <button className="absolute right-4 top-4 bg-transparent" onClick={handleClose}>
                        <IoIosCloseCircle fontSize={24} />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}