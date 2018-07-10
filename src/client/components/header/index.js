import React, {Component} from 'react';

import './index.css';



class Header extends Component {
    constructor(){
        super();

        this.state ={
            show : false
        }
        this.showList = this.showList.bind(this);
        this.changeColorNav = this.changeColorNav.bind(this);
    }

    showList(){
        if(this.state.show){
            this.setState({show: false})
        }else{
            this.setState({show: true})
        }
    }

    changeColorNav(location){
        switch(location){
            case 'homepage':
                return <CompHome />
            case 'mediacenterpage':
                return <CompMediaCenter />
            case 'ourprojectpage':
                return <CompOurProject />
            case 'contactuspage':
                return <CompContactUs/>
            default :
                return <div>hi you have create componet iside Header to change</div>
        }
    }

    render() {
      return (
        <div className='container__header'>
            <div className='header'>
                <div className='header__logo__div'>
                    <img className='header__logo' src={this.props.Logo} />
                </div>
                {this.changeColorNav(this.props.WhereAmI)}
                <div className='header__burger'><i className="fas fa-align-justify" onClick={this.showList}></i></div>
            </div>
            {
                this.state.show &&
                <div className='header__list'>
                    <ul>
                        <a href='/'><li>الرئيسية</li></a>
                        <a href='#aboutUs'><li>عن الشركة</li></a>
                        <a href='/ourprojects'><li>مشاريعنا</li></a>
                        <a href='/mediacenter'><li>المركز الإعلامي</li></a>
                        <a href='/contactus'><li>إتصل بنا</li></a>
                    </ul>
                </div>
            }
        </div>
      );

    }
  }

const CompHome = () =>{
    return (
        <div className='header__nav'>
                    <a href='#' className='colored_blue'><div >الرئيسية</div></a>
                    <a href='#aboutUs'><div>عن الشركة</div></a>
                    <a href='/ourprojects'><div>مشاريعنا</div></a>
                    <a href='/mediacenter'><div>المركز الإعلامي</div></a>
                    <a href='/contactus'><div className='header__nav__contactus'>
                        <i class="fas fa-phone"></i>
                        إتصل بنا
                    </div></a>
        </div>
    );
}

const CompMediaCenter = () =>{
    return (
        <div className='header__nav'>
                    <a href='/'><div >الرئيسية</div></a>
                    <a href='#aboutUs'><div>عن الشركة</div></a>
                    <a href='/ourprojects'><div>مشاريعنا</div></a>
                    <a href='#' className='colored_blue'><div>المركز الإعلامي</div></a>
                    <a href='/contactus'><div className='header__nav__contactus'>
                        <i class="fas fa-phone"></i>
                        إتصل بنا
                    </div></a>
        </div>
    );
}

const CompOurProject = () =>{
    return (
        <div className='header__nav'>
                    <a href='/'><div >الرئيسية</div></a>
                    <a href='#aboutUs'><div>عن الشركة</div></a>
                    <a href='#' className='colored_blue'><div>مشاريعنا</div></a>
                    <a href='/mediacenter'><div>المركز الإعلامي</div></a>
                    <a href='/contactus'><div className='header__nav__contactus'>
                        <i class="fas fa-phone"></i>
                        إتصل بنا
                    </div></a>
        </div>
    );
}
const CompContactUs = () =>{
    return (
        <div className='header__nav'>
                    <a href='/'><div >الرئيسية</div></a>
                    <a href='#aboutUs'><div>عن الشركة</div></a>
                    <a href='/ourprojects'><div>مشاريعنا</div></a>
                    <a href='/mediacenter'><div>المركز الإعلامي</div></a>
                    <a href='#' className='colored_blue'><div className='header__nav__contactus'>
                        <i class="fas fa-phone"></i>
                        إتصل بنا
                    </div></a>
        </div>
    );
}
export default Header;
