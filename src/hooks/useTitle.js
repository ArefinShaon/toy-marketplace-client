import { useEffect } from "react";


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ToyMan`;
    }, [title])
};

export default useTitle;