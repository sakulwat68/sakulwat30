* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

nav {
    width: 80%;
    height: 40px;
    background: white;
    margin: 80px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 30%;
}

.logo img {
    width: 220px;
    float: left;
}

.logo span {
    text-transform: uppercase;
    color: orange;
    font-weight: bold;
    line-height: 215px;
    font-size: 20px;
    margin-left: 10px;
}

.nav-menu {
    width: 40%;
    display: flex;
    justify-content: space-between;
}

.nav-menu li {
    list-style: none;
    padding: 10px 15px ;
    font-size: 20px;
    color: #666;
}

a {
    text-decoration: none;
    color: inherit;
}

.nav-menu li:last-child {
    color: orange;
    font-weight: 600;
}

a:hover {
    color: lightblue;
}

.nav-right {
    width: 30%;
    display: flex;
    justify-content: flex-end;
}

.nav-right li {
    list-style: none;
    margin: 0 15px;
    font-size: 25px;
    padding: 8px 20px;
}

.nav-right li:last-child {
    border: 2px solid;
    font-size: 20px;
    border-radius: 20px;
}

i:hover {
    color: orange;
    cursor: pointer;
}

.cart {
    position: relative;
}

.cart::before {
    position: absolute;
    content: attr(data-count);
    width: 25px;
    height: 25px;
    font-size: 12px;
    line-height: 25px;
    border-radius: 50%;
    top: -20px;
    left: 10px;
    text-align: center;
    background-color: orange;
    color: white;
    cursor: pointer;
    opacity: 0;
}

.cart.on::before {
    opacity: 1;
}

main {
    width: 100%;
    height: 580px;
    padding: 10px 8%;
    display:  flex;
    justify-content: space-between;
}

.item {
    width: 24%;
    height: 400px;
    background: whitesmoke;
    padding: 5px;
    position: relative;
    transition: 0.5s;
    border-radius: 20px;
}

.item:hover {
    height: 560px;
}

.item:hover .data {
    padding: 10px;
    height: 250px;
}

.item:hover img {
    transform: scale(0.8);
}

.item img {
    width: 100%;
    margin: auto;
    transform: scale(1.09);
    transition: inherit;
}

.data {
    width: 100%;
    height: 0;
    background: whitesmoke;
    padding: 0;
    position: absolute;
    bottom: 1px;
    left: 0;
    transition: inherit;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
}

.data p {
    margin:  10px auto;
}

.data strong {
    display:  inline-block;
    width: 100%;
}

.data p:first-child strong {
    width: 65%;
}

.price {
    font-size: 18px;
    font-weight: bold;
    color: orange;
}

.price-full {
    font-size: 15px;
    margin-left: 5px;
    color: rgb(92, 91, 91);
}

.in span {
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    background: white;
    display: inline-block;
    text-align: center;
    margin: 0 6px;
}

.in:nth-of-type(2n) span {
    background: rgb(235, 74, 0);
    border: 2px solid #ccc;
}

.in:nth-of-type(2n) span:first-child {
    background: orange;
}

.in:nth-of-type(2n) span:last-child {
    background: #1f0008;
}

.in-4 span {
    width: 70px;
    height: 20px;
    line-height: 20px;
    border-radius: 8px;
    background-color: white;
    display: inline-block;
    text-align: center;
    margin: 0 6px;
}

.in-4-4 span {
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50px;
    background: white;
    display: inline-block;
    text-align: center;
    margin: 0 6px;
}

.in-4 span.active {
    background-color: orange;
    color: rgb(48, 48, 48);
}

.in-4-4:nth-of-type(2n) span {
    background: rgb(40, 6, 236);
    border: 2px solid #ccc;
}

.in-4-4:nth-of-type(2n) span:first-child{
    background: orange;}

.in-4-4:nth-of-type(2n) span:last-child {
    background: rgb(245, 3, 3);
}
.in-4-4:nth-of-type(2n) span:last-child {
    background: rgb(248, 232, 0);
}

.in-4-4 span.active {
    background-color:orange;
    color: rgb(236, 253, 0);
}


button {
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 8px 20px;
    background: palevioletred;
    margin: 5px 30px 0 5px;
    color: wheat;
    cursor: pointer;
}

button.add {
    background: or;
}

button:hover {
    color: white;
    background-color: #1f0008;
}

.image-animate {
    position: absolute;
    top: 0;
    left: 0;
    background: inherit;
    width: 100%;
    height: 300px;
    border-radius: inherit;
    display: none;
}

.image-animate.active {
    display: block;
    z-index: 5;
}

.item:nth-child(1) .image-animate.active {
    animation: first 0.5s ease-in;
}

.item:nth-child(2) .image-animate.active {
    animation: second 0.5s ease-in;
}

.item:nth-child(3) .image-animate.active {
    animation: third 0.5s ease-in;
}

.item:nth-child(4) .image-animate.active {
    animation: four 0.5s ease-in;
}

@keyframes first {
    to {
        transform: scale(0.08);
        top: -305px;
        left: 925px;
    }
}

@keyframes second {
    to {
        transform: scale(0.08);
        top: -305px;
        left: 605px;
    }
}

@keyframes third {
    to {
        transform: scale(0.08);
        top: -305px;
        left: 277px;
    }
}

@keyframes four {
    to {
        transform: scale(0.08);
        top: -305px;
        left: -45px;
    }
}

.cart-field {
    width: 90%;
    height: 700px;
    background: white;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    position: absolute;
    top: -700px;
    left: 5%;
    transition: 0.5s;
}

.cart-field.display {
    top: 200px;
}

.cart-field .item,
.cart-field .item:hover {
    width: 96%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px auto;   
}

.cart-field .item img,
.cart-field .item:hover img {
    transform: scale(1);
    width: 30%;
}

.cart-field .item .data {
    width: 60%;
    position: relative;
    height: 100%;
    padding: 30px;
    left:  auto;
    background: inherit;
}

.cart-field .item .data strong,
.cart-field .item .data .price {
    font-size: 30px;
    margin: 20px 10px 0 0;
}

.cart-field .data p:first-child strong {
    width: 70%;
}

.cart-field .data p small {
    font-size: 20px;
}

.cart-field .in {
    display: inline;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 25px;
}

.cart-field .image-animate.active {
    display: none;
}