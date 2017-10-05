import React from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import globalStyles from 'client/styles/globalStyles.css';
import styles from 'client/layout/styles/about_style.css';
import Carousel from 'nuka-carousel';

const vi = {
    intro: 'Giới thiệu',
    design: 'Lĩnh vực thiết kế',
    construction: 'Lĩnh vực thi công',

	introPara: "Được thành lập từ năm 2009, trong quá trình xây dựng thương hiệu riêng MAS Architecture đã đạt được nhiều thành công trong lĩnh vực thiết kế và xây dựng. Công ty của chúng tôi là nơi tập họp các kiến trúc sư, kĩ sư trẻ đầy kĩ năng, thiết kế các giải pháp không gian thông minh. Điều quan trọng nhất từng bước tạo nên thành công của chúng tôi là phục vụ mọi khách hàng với tinh thần làm việc luôn luôn sáng tạo và trách nhiệm.",

	designPara: 'MAS Architecture chuyên thiết kế các công trình dân dụng và công nghiệp như : nhà phố, biệt thự, nhà hàng, khách sạn, bar, coffee, văn phòng ... Với tiêu chí “ Sáng tạo - Kinh nghiệm - Nhiệt huyết” , MAS Architecture mong muốn đem đến cho khách hàng một không gian sống thoải mái, sống động',

	constructionPara: 'MAS Architecture luôn hướng tới tiêu chí hoàn mỹ đến từng chi tiết, chúng tôi mong muốn đem đến cho khách hàng những sản phẩm ngoại nội thất sấc sảo chất lượng song song với những thành quả mà đội ngũ thiết kế gây dựng được. Với những cơ sở vật chất hiện có và kinh nghiệm hành nghề , chúng tôi hoàn toàn có thể tự tin đáp ứng được những khách hàng kĩ tính nhất.'
}

const en = {
	intro: 'Introduction',
    design: 'Design Team',
    construction: 'Construction Team',

	introPara: 'Established in 2009, through the progress of development MAS Architecture has achieved many success in the field of design and construction. Our company  is a gathering place for young architects and skilled engineers to design the solution for clever space. The most important step (part) which creates our success is the creativity and responsibility in service all customers who come to see us.',

	designPara: 'MAS Architecture design  civil & industrial architectural projects such as houses, villas, restaurant, hotel, bar, coffee, office ... With the slogan "Creativity - Experiences - Enthusiasm", MAS Architecture will bring you an active and comfortable living space.',

	constructionPara: 'The criteria of MAS Architecture is the perfection of every details, we provide you with high quality interior and exterior products together with the excellent results that is built by our design team. With the experiences and existing facilities, we are fully confident in satisfying the highest level of business.'
}

export default class General extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            lang:vi,
            name:[],
        }
    }

    fetchDataFromServer() {
		fetch('/api/about', {
			credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({name:responseJson});
			console.log('fetch data result: ',this.state.name);
		})
	}

    componentWillReceiveProps(nextProps) {
        switch (nextProps.locale) {
            case 'en':
                this.setState({lang:en});
                break;
            default:
                this.setState({lang:vi});
        }
    }
    componentWillMount() {
        this.fetchDataFromServer();
        switch (this.props.locale) {
            case 'en':
                this.setState({lang:en});
                break;
            default:
                this.setState({lang:vi});
        }
    }
    render(){
        // return (
        //     <div className={styles.wrapper}>
        //         <div className={globalStyles.col_4}>
        //             <div className={styles.para_wrapper}>
        //                 <h1 className={styles.title}>{this.state.lang.intro}</h1>
        //                 <p className ={styles.para}>{this.state.lang.introPara}</p>
        //             </div>
        //         </div>
        //
        //         <div className={globalStyles.col_4}>
        //             <div className={styles.para_wrapper}>
        //                 <h1 className={styles.title}>{this.state.lang.design}</h1>
        //                 <p className ={styles.para}>{this.state.lang.designPara}</p>
        //             </div>
        //         </div>
        //
        //         <div className={globalStyles.col_4}>
        //             <div className={styles.para_wrapper}>
        //                 <h1 className={styles.title}>{this.state.lang.construction}</h1>
        //                 <p className ={styles.para}>{this.state.lang.constructionPara}</p>
        //             </div>
        //         </div>
        //     </div>
        //
        // );
        console.log("data",this.state.name);
        var nodeList = this.state.name.map((item,index) =>{
            if (this.props.locale == item.ngonNgu)
                return(
                    <div className={styles.wrapper}>
                        <div className={styles.intro_para}
                             dangerouslySetInnerHTML={{__html: item.noiDung}}>
                        </div>
                    </div>
                )

        })
        return(
            <div>
                {nodeList}
            </div>
        );
    }
}
