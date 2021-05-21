import React,{useRef,useEffect} from 'react';

const { tableau } = window;


function TableauEmb(){
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/Page1_16192130902500/Story1?:language=en&:display_count=y&:origin=viz_share_link";
   
    const option = {
        device: "desktop",
    };

    function initViz(){
        new tableau.Viz(ref.current, url,option)
    }

    useEffect(() => {
        initViz();
        
    }, []);

    return(
        <div>
            <div ref = {ref}>
            </div>
        </div>
    )
}




export default TableauEmb;