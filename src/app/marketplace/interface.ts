export interface ItemProps {
    nome: string;
    descricao: string;
    valor: string;
    imagem: string;
}
export interface ItemCardProps {
    item: ItemProps;
    isAtual: boolean;
}

export interface ModalItensProps {
    setIsOpen: (bool: boolean) => void;
    vendedor: string;
    items: ItemProps[]
}

export interface ModalItensProps {
    setIsOpen: (bool: boolean) => void;
    vendedor: string;
    items: ItemProps[]
}
