import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { useIPFS } from "./useIPFS";
import Aos from 'aos';
import "aos/dist/aos.css";

const Shop = () => {
  let [data,setData] = useState([]);
  let[totalNftsFound,settotalNftsFound] = useState(0)
  let[cursor,setcursor] = useState("")
let[FetchSuccess,setFetchSuccess] = useState(false);
const axios = require('axios').default;
const apiKey = "VoKX6I9d76c1ISL6NpB6KTXmvB6abSpP";
const baseURL = `https://eth-rinkeby.alchemyapi.io/nft/v2/${apiKey}/getNFTsForCollection`;
const contractAddr = "0x83e495be3549a302d1e72b4f520127ec042b7d58";
const modalRef = useRef();
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  useEffect(() => {
    Aos.init();
    getnftData();
  }, [])

  const getnftData = async () => {
    let nft = [];
    let hasNextPage = true;
    while (hasNextPage) {
      const { data: nfts } = await axios(`https://deep-index.moralis.io/api/v2/nft/${contractAddr}?chain=eth&format=decimal&cursor=${cursor}`, {
        headers: {
          'x-api-key': '0D1yPrfVMgJsqXaqHHfz31Zh4JZq0y2bbv6m5ALiapsiSIO4PAZlQczYOvZjJ4HX'
        }
      })
      console.log(nfts)
      nfts?.result.map((dat) => {
        console.log(dat)
        settotalNftsFound(totalNftsFound += 1);
        nft[dat.token_id] = { name: dat.name, image: (JSON.parse(dat.metadata)).image, description: (JSON.parse(dat.metadata)).description, id: dat.token_id }
      })
      setData(data = nft)
      if (!cursor) {
        // When nextToken is not present, then there are no more NFTs to fetch.
        hasNextPage = false;
      }
      setcursor(cursor = nfts.cursor);

      console.log(totalNftsFound)
      setFetchSuccess(FetchSuccess = true)
    }

  }

  function toggleAccordion(event) {
    debugger;
    let items;
    items = document.getElementsByTagName('article');
    const article_id = event.currentTarget.getAttribute('id');

    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== article_id)
        items[i].className = "collapsed";
    }

    if (event.currentTarget.className === "selected expanded") {
      event.currentTarget.className = "collapsed"
    }
    else {
      event.currentTarget.className = "selected expanded"
    }
  }

  const openModal = () => {
    setTimeout(() => {
      modalRef.current.className = "modal modal-lg active";
      modalRef.current.style.display = "block";
      modalRef.current.style.opacity = "1";
    }, 250);
    // document.body.classList.add("modal-active");
  }

  const closeModal = () => {
    modalRef.current.className = "modal modal-lg";
    modalRef.current.style.display = "none";
    // document.body.classList.remove("modal-active");
  }

  return <>
  <div className="shop-row">

    <aside className="shop-sidebar">
      <a href="#" className="filter-collection">
        <img src={require('../../assets/images/filter-collection.svg').default} alt="filter" />
      </a>
    </aside>

    <section className="search-market-row">
      <div className="search-market-field-row">
        <input placeholder="Search items, collections, and accounts" role="searchbox" type="text" value="" />
      </div>

      <div className="search-filter">
          <Select options={options} className="select" />
        </div>
  
    </section>
  </div>


  <div className="mobile-filter-row">
    <a href="#" className="mobile-filter" data-toggle="modal" data-target="#smart-contract">
      <img src={require('../../assets/images/filter-mobile.svg').default} alt="mobile-filter" /> Filter</a>
    <a href="#" className="mobile-sort">
      <img src={require('../../assets/images/sort-mobile.svg').default} alt="sort-mobile" /> Sort</a>
  </div>

  <div className="divider-shop">

  </div>

  <div className="market-row">
    <aside className="market-sidebar">
      <div className="card">
        <article id="article-1" className="collapsed" onClick={toggleAccordion}>
          <div className="market-arrow sidebar-content-heading">Status</div>
          <div className="content">
            <div className="market-status-row">
              <div className="market-checkbox-row active">
                <div>Buy Now</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>On Auction</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>New</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>Has Offers</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="sidebar-divider">
            </div>
          </div>
        </article>
      </div>

      <div className="card">
        <article id="article-2" className="collapsed" onClick={toggleAccordion}>
          <div className="market-arrow sidebar-content-heading">Collections</div>
          <div className="content">
            <div className="market-status-row">
              <div className="market-checkbox-row active">
                <div>Buy Now</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>On Auction</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>New</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>Has Offers</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="card">
        <article id="article-3" className="collapsed" onClick={toggleAccordion}>
          <div className="market-arrow sidebar-content-heading">Price</div>
          <div className="content">
            <div className="market-status-row">
              <div className="market-checkbox-row active">
                <div>Buy Now</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>On Auction</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>New</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>Has Offers</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="card">
        <article id="article-4" className="collapsed" onClick={toggleAccordion}>
          <div className="market-arrow sidebar-content-heading">Item Quantity</div>
          <div className="content">
            <div className="market-status-row">
              <div className="market-checkbox-row active">
                <div>Buy Now</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>On Auction</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>New</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
            <div className="market-status-row">
              <div className="market-checkbox-row">
                <div>Has Offers</div>
                <div><input type="checkbox" /></div>
              </div>
            </div>
          </div>
        </article>
      </div>

    </aside>
    <section className="market-section">
      <div className="search-results-number">
        165,256,156 Results
      </div>

      <div className="filter-btns-action-row">
        <button className="buy-now">Buy now <img src={require('../../assets/images/close-btn.svg').default} alt='close-btn' /></button>
        <button className="clear-all">Clear all </button>
      </div>

      <div className="nft-results-container">
        {/* <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>

          </div>

        </div>
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>
          </div>
        </div>

        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>
          </div>

        </div>
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>

          </div>

        </div>
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>

          </div>

        </div>
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>

          </div>

        </div>
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>

          </div>

        </div>
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>

          </div>

        </div>
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>

          </div>

        </div> */}
        <div className="nft-artwork-result">
          <div className="nft-sale-img">
            <img src={require('../../assets/images/117gallery.png')} alt='117-gallery' />
          </div>

          <div className="nft-artwork-details">
            <div className="nft-sale-title">
              Cyber #3968
            </div>

            <div className="nft-sale-title-second">
              Weed Cats Family #375
            </div>

            <div className="nft-sale-market-place">
              <div>Marketplace</div>
              <div> <img src={require('../../assets/images/opensea.svg').default} alt='opensea' /> </div>
            </div>

            <div className="buy-art">
              Buy Now
            </div>
          </div>

        </div>
{FetchSuccess && data.map((dat)=>{  
console.log(dat)
 return (  
         <div className="nft-artwork-result">
              <div className="nft-sale-img">
                <img src={dat?.image} alt='117-gallery' />
              </div>
  
              <div className="nft-artwork-details">
                <div className="nft-sale-title">
                  {dat?.name}
                </div>
  
                <div className="nft-sale-title-second">
                {`${dat?.name}#${dat?.id}` } 
                </div>
  
                <div className="nft-sale-market-place">
                  <div>Marketplace</div>
                  <div> <img src={dat?.image} alt='opensea' /> </div>
                </div>
  
                <div className="buy-art">
                  Buy Now
                </div>
  
              </div>
            </div>
)})}

     
      </div>
    </section>
  </div>
</>
}

export default Shop