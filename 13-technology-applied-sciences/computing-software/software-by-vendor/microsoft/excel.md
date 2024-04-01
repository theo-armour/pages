# Excel

## Copy Column

=reference!C:Cmex s

## Find first and last cells in row or column

control + arrow keys

## Select to end of row or column

CTRL+SHIFT+Down Arrow. This will select all rows below the same column as the starting cell1.

## Don’t display zero values

https://professor-excel.com/return-blank-cells-instead-zeroes

## Copy cells from another workbook

Remember the quotes!

* ='[2024-02-17-mint-transactions-12925.xlsx]in'!A151:D1171
* ='[2024-tiller-income-expense.xlsx]Transactions'!A1:A10
Filter
* =filter('[2024-03-27-mint-transactions-12925.xlsx]in'!A151:D1309,'
[2024-03-27-mint-transactions-12925.xlsx]in'!C151:C1309="Charity)

## Filter by category, fund uniques and sum each

To see all

=FILTER('2023-transactions'!A2:D1185,('2023-transactions'!C2:C1185="charity"),"")

See uniques

=SORT(UNIQUE(B2:B1000))

Sum each
=SUMIFS('2023-transactions'!D2:D1000,'2023-transactions'!B2:B1000,charity!G5)

