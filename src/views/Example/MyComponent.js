import React from 'react';

//   JSX=> return 1 block 
//fragment

class MyComponents extends React.Component {
    state = {
        name: 'Ken',
        channnel: 'Hoi Dan It'
    }
    //ko cần khai báo function trong class
    render() {
        let name = 'Ken';
        return (
            // Cứu cánh như 1 thẻ dive bao lại mà ko cần khai báo div :dùng <React.Fragment> Hoặc <></>
            <>
                <div className='=first name'>
                    {console.log('my name', name)}
                    hé lô hé lô , My name is {this.state.name}

                </div>
                <div className='=second name'>
                    My du túp channel :{this.state.channnel}
                </div>
            </>
        )
    }
}

//Muốn dùng components ở file khác thì phải export
export default MyComponents;