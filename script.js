let st1="";
let st2="";
const bracketOpen = document.getElementsByClassName("brackets")[0];
const bracketClose = document.getElementsByClassName("brackets")[1];
const text1 = document.getElementsByClassName("mtext2")[0];
const text2 = document.getElementsByClassName("mtext3")[0];
bracketOpen.addEventListener("click", ()=>{
    modifyString('(');
});
bracketClose.addEventListener("click", ()=>{
    modifyString(')');
});
function modifyString(ch){
    if(ch=='=')
    {
        st1=st2.substring(1)+"";
        s2="";
        text1.textContent=st1+"";
        text2.textContent=st2+"";
    }
    else if(ch=='A')
    {
        st1="";
        st2="";
        text1.textContent=st1+"";
        text2.textContent=st2+"";
    }
    else if(ch=='D')
    {
        st1=st1.substring(0,(st1.length-1));
        text1.textContent=st1+"";
        st2="= "+eval(st1);
        text2.textContent=st2+"";
    }
    else
    {
        let cha=st1.charAt(st1.length-1);
        if(((cha=='+')||(cha=="-")||(cha=="*")||(cha=="/")||(cha=="."))&&((ch=='+')||(ch=="-")||(ch=="*")||(ch=="/")||(ch==".")))
        {
            st1=st1.substring(0,(st1.length-1))+ch;
        }
        else
        {
            st1=st1+ch;
        }
        text1.textContent=st1+"";
        st2="= "+eval(st1);
        text2.textContent=st2+"";
    }
}