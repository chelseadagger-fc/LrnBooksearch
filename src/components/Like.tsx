import { useState } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
    const [isLiked, setLiked] = useState(false);

    const toggle = () => {
        setLiked(!isLiked);
        onClick();
    }

    if (isLiked) return <AiFillHeart color="#ff6b81" size="3rem" onClick={toggle} />;
    return <AiOutlineHeart size="3rem" onClick={toggle} />;
}

export default Like