import React,{useRef,useEffect} from 'react';

const { tableau } = window;


function TableauEmb(){
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/Page3_16190224006920/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
   
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