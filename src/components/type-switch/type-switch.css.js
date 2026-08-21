import { css } from "lit";

export default css`
    :host{
    display:inline-block;
    }
    .switch{
    width:50px;
    height:28px;
    border-radius:20px;
    position:relative;
    cursor:pointer;
    }

    .on{
    background:#ff6154;
    }
    .off{
    background:#52576e;
    }
    .tumb{
    width:22px;
    height:22px;
    border-radius:50%;
    background:white;
    position:absolute;
    top:3px;
    transition:.3s;
    }
    .right{
    right:3px;
    }
    .left{
    left:3px;
    }

    .footer{    
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
    }
`;
