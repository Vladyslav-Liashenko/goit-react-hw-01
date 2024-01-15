import styles from'./TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.container}>
      <table className={styles.transaction_history}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        {items.map((el, index) => (
          <tbody
            className={(index + 1) % 2 === 0 ? styles.tbodyOdd : styles.tbodyEven}
            key={el.id}
          >
            <tr className={styles.tr} key={el.id}>
              <td className={styles.td}>{el.type}</td>
              <td className={styles.td}>{el.amount}</td>
              <td className={styles.td}>{el.currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
