import React, {Component} from 'react';

import './index.css';


class Header extends Component {
    constructor(){
        super();

        this.state ={
            show : false
        }
        this.showList = this.showList.bind(this);
    }

    showList(){
        if(this.state.show){
            this.setState({show: false})
        }else{
            this.setState({show: true})
        }
    }

    render() {
        console.log(this.state, 'state is here ');

      return (
        <div className='container__header'>
            <div className='header'>
                <div className='header__logo__div'>
                    <img className='header__logo' src='./assets/nabali-fares-logo.png' />
                </div>
                <div className='header__nav'>
                    <div href='#'>الرئيسية</div>
                    <div href='#'>عن الشركة</div>
                    <div href='#'>مشاريعنا</div>
                    <div href='#'>المركز الإعلامي</div>
                    <div href='#' className='header__nav__contactus'>
                        <i className="fas fa-phone"></i>
                        إتصل بنا
                    </div>
                </div>
                <div className='header__burger'><i className="fas fa-align-justify" onClick={this.showList}></i></div>
            </div>
            {
                this.state.show &&
                <div className='header__list'>
                    <ul>
                        <li href='#'>الرئيسية</li>
                        <li href='#'>عن الشركة</li>
                        <li href='#'>مشاريعنا</li>
                        <li href='#'>إتصل بنا</li>
                    </ul>
                </div>
            }
        </div>
      );

    }
  }

  export default Header;
