import "./nav.css";
import Group from "./Group.png"


function Nav() {
    return (
        <>
            <main className="container">
                <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                    <div className="tab_box">
                        <button className="tab_btn active" href="">Women</button>
                        <button className="tab_btn" href="">Men</button>
                        <button className="tab_btn" href="">Kids</button>
                        <div className="line"></div>
                    </div>
                    <div className="img-div">
                        <img src={Group} alt="" />
                    </div>
                    <div className="icon" style={{ width: '20%', display: 'flex', justifyContent: 'end', gap: '10px' }}>
                        <div className="select_box" style={{ cursor: 'pointer', display: 'flex' }}>
                            <i style={{ fontSize: '24px' }} className="fa symbol">&#xf155;</i>
                            <i className="material-icons rotate" style={{ color: "black" }}>keyboard_arrow_down</i>
                        </div>
                        <div className="select_item_box">
                            <div className="select_item">
                                <i style={{ fontSize: "24px" }} className="fa">&#xf155;</i>
                                <p className="item_name">USD</p>
                            </div>
                            <div className="select_item">
                                <i style={{ fontSize: "24px" }} className="fa">&#xf153;</i>
                                <p className="item_name">GBP</p>
                            </div>
                            <div className="select_item">
                                <i style={{ fontSize: "24px" }} className="fa">&#xf157;</i>
                                <p className="item_name">JPY</p>
                            </div>
                        </div>
                        <div className="shop_select_box" style={{ cursor: "pointer", position: "relative" }}>
                            <i className="material-icons" style={{ color: "black" }}>shopping_cart</i>
                            <span className="num"></span>
                        </div>
                        <div className="shop_item_box" style={{ width: "20%", height: "65%", background: "white", padding: "10px" }}>
                            <div className="total_elem">

                            </div>
                            <div className="shop_item_inside" style={{ width: "100%", height: "70%", overflow: "auto" }}>


                            </div>
                            <div className="shop_item_inside_demo"
                                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "20%" }}>
                                <div className="total_mini_cart" style={{ display: "flex", justifyContent: "space-between", margin: "20px 0px", fontWeight: "700" }}>

                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <button className="shop_button"
                                        style={{ cursor: "pointer", background: "white", border: "1px solid", width: "48%", height: "40px" }}>View
                                        bag</button>
                                    <button className="shop_button_check"
                                        style={{ cursor: "pointer", background: "#5ECE7B", color: 'white', border: "none", width: "48%", height: "40px" }}>CHECK
                                        OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Nav