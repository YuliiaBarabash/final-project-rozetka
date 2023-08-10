import './Table.css';
import arrows from '../../assets/arrows.svg';
import pencil from '../../assets/pencil.svg';
import bucket from '../../assets/bucket.svg';

const Table = () => {
    return (
        <div className="table-container">
            <h1 className="products-heading">Products</h1>
            <table className='product-table' cellspacing="0" cellpadding="0">
                <tr className='headers'>
                    <th className='table-header'>ID <img src={arrows} className="arrows-icon" alt="arrows" /></th>
                    <th className='table-header'>Category <img src={arrows} className="arrows-icon" alt="arrows" /></th>
                    <th className='table-header'>Name <img src={arrows} className="arrows-icon" alt="arrows" /></th>
                    <th className='table-header'>Quantity <img src={arrows} className="arrows-icon" alt="arrows" /></th>
                    <th className='table-header'>Price <code>(</code>₴<code>)</code><img src={arrows} className="arrows-icon" alt="arrows" /></th>
                    <th className='table-header'></th>
                </tr>
                <tr className='row-even'>
                    <th className='item-even'>0</th>
                    <th className='item-even'>PC</th>
                    <th className='item-even'>Lenovo Y50-70</th>
                    <th className='item-even'>5</th>
                    <th className='item-even'>25,000.00</th>
                    <th className='icons'><img src={pencil} className="pencil-icon" alt="pencil" /><img src={bucket} className="bucket-icon" alt="bucket" /></th>
                </tr>
                <tr className='row-odd'>
                    <th className='item-odd'>1</th>
                    <th className='item-odd'>Clothes</th>
                    <th className='item-odd'>Nike M Nk Df Acd21</th>
                    <th className='item-odd'>22</th>
                    <th className='item-odd'>4,000.00</th>
                    <th className='icons'><img src={pencil} className="pencil-icon" alt="pencil" /><img src={bucket} className="bucket-icon" alt="bucket" /></th>
                </tr>
                <tr className='row-even'>
                    <th className='item-even'>2</th>
                    <th className='item-even'>Plumbing</th>
                    <th className='item-even'>CERSANIT MITO 17</th>
                    <th className='item-even'>1337</th>
                    <th className='item-even'>5,000.00</th>
                    <th className='icons'><img src={pencil} className="pencil-icon" alt="pencil" /><img src={bucket} className="bucket-icon" alt="bucket" /></th>
                </tr>
            </table>
        </div>
    );
}

export default Table;