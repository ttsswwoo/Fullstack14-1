/* eslint-disable no-unused-vars */
import Logo from "../common/Logo"
import ThemeSwitcher from './ThemeSwitcher.jsx'
import Frame from '../../components/Footer/Frame 3848.png'

import "./style.scss"
import { useState } from 'react'

function Footer(props) {
    return (
        <>
            {/* Explore ================================= */}
            <div className="explore">
                <div className="logo2">
                    <h1>Explore</h1>
                    <button className="btn">Recently Added <h>›</h> </button>
                </div>

                <div className="cards2">
                    <div className="card1">
                        <div className="img2">
                            <img src="http://localhost:5173/src/assets/imgs/Salin1.png" alt="" />
                        </div>
                        <p>ExBoot #1</p>
                        <div className="end2">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="img2">
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNR3RzGOy3CghD1BZWX4R2Gg9P_NI4P2P7hXAx_ROX4jyuAwX-" alt="" />
                        </div>
                        <p>ExBoot #2</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card3">
                        <div className="img2">
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUkswiamGcwxPWX5p-c2KR8bNuTD2C0zq3tX1LXyQ9tu9NaAba" alt="" />
                        </div>
                        <p>Future of Polygon X</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card4">
                        <div className="img2">
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSY49tvHJTv1zIwtU82RnsAX7j9LCSPRepf4IEYSglWQAOBrGzJ" alt="" />
                        </div>
                        <p>Blue Wave #2</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards3">
                    <div className="card1">
                        <div className="img2">
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQa2hE5S22U7rrWLFDlj9l3_iMye1vjUNsEM02qxuILG0AOjOSC" alt="" />
                        </div>
                        <p>ExBoot #1</p>
                        <div className="end2">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="img2">
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjJyq2kuHUPdJbSWRmwLwvf7rltEFUAKYFeDLjtvQyYFU-cLMG" alt="" />
                        </div>
                        <p>ExBoot #2</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card3">
                        <div className="img2">
                            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYcVrs8qro8ontfbPqIx4BbPSOBZUgr0WVCigTZI-sYE0gXZIJ" alt="" />
                        </div>
                        <p>Future of Polygon X</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card4">
                        <div className="img2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7aRvgPy7xEiCp3_MMwg65hDR5TcEXgaTduI-x-cwP8p2p_YS" alt="" />
                        </div>
                        <p>Blue Wave #2</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards4">
                    <div className="card1">
                        <div className="img2">
                            <img src="https://cs13.pikabu.ru/post_img/big/2019/05/21/5/1558423869179870452.jpg" alt="" />
                        </div>
                        <p>ExBoot #1</p>
                        <div className="end2">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="img2">
                            <img src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1660411484_53-kartinkin-net-p-tsvetnoe-steklo-fon-krasivo-70.jpg" alt="" />
                        </div>
                        <p>ExBoot #2</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card3">
                        <div className="img2">
                            <img src="https://avatars.dzeninfra.ru/get-zen_doc/4756594/pub_627e96e7324bda5b3a28be44_627e983037af4e7363e5e5ad/scale_1200" alt="" />
                        </div>
                        <p>Future of Polygon X</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>

                    <div className="card4">
                        <div className="img2">
                            <img src="https://tiermaker.com/images/template_images/2022/16270260/lux-wild-rift-16270260/screenshot20231015181838wild-rift.png" alt="" />
                        </div>
                        <p>Blue Wave #2</p>
                        <div className="end">
                            <div className="left-2">
                                <img src="http://localhost:5173/src/assets/imgs/leaderboard/imo1.png" alt="" />
                                <p>Perperzon</p>
                            </div>
                            <div className="right-2">
                                <small>Current Bid</small>
                                <p>฿3.421</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="more">Discover More</button>
            </div>


            {/* Install----------------------------------------------------------------------------------------------------------------- */}
            <div className="install">
                <div className="one">
                    <h1>Try our App Mobile NFT</h1>
                    <button>↓ Download Now </button>
                </div>
                <div className="two">
                    <img src={Frame} className='Frame' />
                </div>
            </div>


            <div className="footer">
                <div className="first">
                    <Logo />
                    <h1>NFT Distro</h1>
                    <small>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</small>
                    <p>
                        <span>©️</span>
                        <small>Copyright NFT Distro 2023</small>
                    </p>
                </div>

                <ThemeSwitcher />

<<<<<<< HEAD
                <div className="second">
                    <ul>
                        <h3>Company</h3>
                        <li>Explore</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className="third">
                    <ul>
                        <h3>Cretor</h3>
                        <li>FAQ</li>
                        <li>Become Artist</li>
                    </ul>
                </div>

                <div className="fourth">
                    <h3>Join our community</h3>
                    <input className="input" type="search" placeholder="Enter your email address" />
                    <div className="linear">
                        <p className="p">→</p>
                    </div>
                </div>
            </div >
        </>
=======
                <p>
                    <span>©️</span>
                    <small>Copyright NFT Distro 2023</small> 
                </p>
            </div>
            <div className="right">
            </div>
        </footer>
>>>>>>> a918671eeda4704df3274ea05e46215e9084f30c
    );
}

export default Footer;