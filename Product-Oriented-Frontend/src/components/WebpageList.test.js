import { render, screen } from '@testing-library/react';
import WebpageList from './WebpageList';

test('Display error message if error = True', () => {
    const fakeWebpageList = [
        {   id:1,
            webpagename: 'ProShop',
            url: 'https://www.proshop.dk/',
            price: 199,
            productid: 3,
        },
        {   id:2,
            webpagename: 'Elgiganten',
            url: 'https://www.elgiganten.dk/',
            price: 250,
            productid: 3,
        },
        {   id:3,
            webpagename: 'Power',
            url: 'https://www.power.dk/',
            price: 250,
            productid: 3,
        }
    ]
    const errortrue = true
    const errorMsg = "There is an error"
    render(<WebpageList WebpageList={fakeWebpageList} error ={errortrue} errorMsg={errorMsg}/>);
    const error = screen.getByTestId("error")
    expect(error.textContent.trim()).toBe(errorMsg)
});

