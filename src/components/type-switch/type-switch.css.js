import { css } from "lit";

export default css`
    :host{
    display:inline-block;
    }
    .switch{
    width:42px;
    height:24px;
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
    width:18px;
    height:18px;
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
