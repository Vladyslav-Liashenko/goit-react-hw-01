import './TransactionHistory.css';
export const TransactionHistory = ({ items }) => {
  return (
    <div className="container">
      <table className="transaction-history">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Type</th>
            <th className="th">Amount</th>
            <th className="th">Currency</th>
          </tr>
        </thead>
        {items.map((el, index) => (
          <tbody
            className={(index + 1) % 2 === 0 ? 'tbodyOdd' : 'tbodyEven'}
            key={el.id}
          >
            <tr className="tr" key={el.id}>
              <td className="td">{el.type}</td>
              <td className="td">{el.amount}</td>
              <td className="td">{el.currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
