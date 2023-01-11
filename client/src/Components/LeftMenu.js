import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';

const LeftMenu = ({ marked }) => {
  const [showMoreInfo, setShowMetmoreInfo] = useState(false);

  const menuItems = [
    {
      value: "Show All Blogs",
      showAt: "all-blogs",
      link: "/blogs/all",
    }, 
    {
      value: "Coding Resources",
      showAt: "resources",
      link: "/resources",
    },
    {
      value: "Coding Sheets",
      showAt: "coding-sheets",
      link: "/coding-sheets/striver-sde-sheet",
    },
    {
      value: "Coding Competitions",
      showAt: "all-coding-competitions",
      link: "/coding-competitions",
    },
    {
      value: "Selected Profiles",
      showAt: "selected-profiles",
      link: "/selected-profiles",
    },
    {
      value: "Opportunities",
      showAt: "opportunities",
      link: "/opportunities",
    }
    // {
    //   value: "Aptitude Round",
    //   showAt: "aptitude-round",
    //   link: "/aptitude-round",
    // },
  ]

  return (
    <Container onClick={() => showMoreInfo == true ? setShowMetmoreInfo(false) : showMoreInfo}>
      {/* <a href='/' className="logo">AlgoListed</a> */}
      
      <Tooltip title="Website under Development">
        <div className="logo">
          Beta Version
          {/* <div className="small-top">V2.17</div> */}
        </div>
      </Tooltip>
      <div className="mid-links">
        {
          menuItems.map((item, index) => {
            return <a key={index} href={`${item.link}`} className={item.showAt == marked ? "link current-link" : "link"}>{item.value}</a>
          })
        }
        {/* <a href='https://jasonfenggit.github.io/Visualizer/' target={"_blank"} className="link">Algorithm Visualizers</a> */}

        <div className="flag">
          <div className="line"></div>
          <div className="text">algolisted.com</div>
          <div className="line"></div>
        </div>
        <a href='https://github.com/Nayaker/AlgoListed/tree/main/client/src/MarkdownFiles' target={"_blank"} className="link">Contribute Blog Content</a>
        <a href='https://github.com/Nayaker/Algorithmist/' target={"_blank"} className="link">Report an Issue</a>
      </div>

      {
        showMoreInfo ? (
          <div className="more-model">
            {/* <div><a className="more-link" href='/organisation-information/core-team'>Core Team</a></div> */}
            <div><a className="more-link" href='/organisation-information/all-contributors'>Contributors</a></div>
            <div><a className="more-link" href='/organisation-information/about-us'>About Us</a></div>
            <div><a className="more-link" href='/organisation-information/verify-contributor'>Verify Contributor</a></div>
            <div><a className="more-link" href='/organisation-information/privacy-policies'>Privacy Policies</a></div>
            <div><a className="more-link last-more-link" href='/organisation-information/disclaimer'>Disclaimer</a></div>
          </div>
        ) : (<></>)
      }

      <div className="bottom-btns" onClick={() => setShowMetmoreInfo(!showMoreInfo)}>
        <MenuIcon className='icon' />
        <div className="text">More</div>
      </div>
    </Container>
  )
}

export default LeftMenu

const Container = styled.div`
  width: 200px;
  border-right: 1px solid rgba(230, 230, 230, 1);
  height: 100vh;
  min-height: 600px;
  background-color: white;
  z-index: 2;
  position: fixed;
  /* overflow-y: scroll; */
  top: 0;
  left: 0;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  user-select: none;

  .logo{
    user-select: none;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 300;
    text-decoration: none;
    /* text-transform: uppercase; */
    letter-spacing: 0.15rem;
    height: 45px;
    background-color: #211f1f;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    /* border: 1px solid #f7d59d; */
    border-radius: 100px;
    cursor: pointer;
    position: relative;;

    .small-top{
      position: absolute;
      font-size: 0.5rem;
      font-weight: 200; 
      top: 3.5px;
      right: 100px;
      color: white;
    }

  }

  .mid-links{
    margin-top: 15px;
   

    .flag{
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 30px 0 10px 0;

      .line{
        width: 20%;
        height: 1px;
        background-color: black;
      }

      .text{
        font-size: 0.8rem;
        font-weight: 400;
      }
    }

    .link{
      width: 100%;
      font-size: 0.75rem;
      font-weight: 300;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      cursor: pointer;
      text-align: center;
      margin-bottom: 7.5px;
      color: inherit;
      text-decoration: none;
      
      &:hover{
        background-color: #e5e5e5;
        transition-duration: 250ms;
      }
    }
    
    .current-link{
      background-color: #e5e5e5;
    }
  }

  .more-model{
    width: 200px;
    position: absolute;
    left: 10px;
    bottom: 50px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    box-shadow: rgb(28 28 28 / 26%) 0px 2px 20px;
    background-color: white;

    .more-link{
      display:block;
      width: 100%;
      font-size: 0.75rem;
      font-weight: 300;
      cursor: pointer;
      padding: 12.5px 20px;
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid #e5e5e5;

      &:hover{
        background-color: #eeeeee;
        transition-duration: 250ms;
        color: black;
      }
    }

    .last-more-link{
      border-bottom-color: transparent;
    }
  }

  .bottom-btns{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    
    cursor: pointer;

    .icon{

    }

    .text{
      font-weight: 300;
      font-size: 0.85rem;
      margin-left: 5px;
    }
  }
`