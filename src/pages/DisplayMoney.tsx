export function DisplayMoney({ money }: { money: number; }) {
  return (
    <div>
      The amount of money you have:
      {money}
      {money < 2000
        && (
        <p style={{ color: 'red' }}>
          LOW MONEY
        </p>
        )}
    </div>
  );
}

export default DisplayMoney;
