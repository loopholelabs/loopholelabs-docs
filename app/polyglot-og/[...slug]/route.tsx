import {GenerateDocsOGImage} from '@/components/OG/OG';
import {polyglotMetadataImage} from '@/lib/metadata';

const polyglotIconDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iMTEwIiB2aWV3Qm94PSIwIDAgOTggMTEwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUwLjQ0NzYgMTEuODg5N0w1Ny4xNjc3IDE1Ljc2ODlDNTcuNDIzIDE0LjU3MzcgNTcuNDA3OCAxMy4zMzY1IDU3LjEyMzQgMTIuMTQ3OUM1Ni44MzkgMTAuOTU5MyA1Ni4yOTI0IDkuODQ5MjggNTUuNTIzOCA4Ljg5OTA5QzU0Ljc1NTEgNy45NDg5IDUzLjc4MzcgNy4xODI1NiA1Mi42ODA4IDYuNjU2MTNDNTEuNTc3OCA2LjEyOTY5IDUwLjM3MTEgNS44NTY0OCA0OS4xNDg5IDUuODU2NDhDNDcuOTI2NyA1Ljg1NjQ4IDQ2LjcyIDYuMTI5NjkgNDUuNjE3IDYuNjU2MTNDNDQuNTE0IDcuMTgyNTYgNDMuNTQyNyA3Ljk0ODkgNDIuNzc0IDguODk5MDlDNDIuMDA1MyA5Ljg0OTI4IDQxLjQ1ODggMTAuOTU5MyA0MS4xNzQ0IDEyLjE0NzlDNDAuODg5OSAxMy4zMzY1IDQwLjg3NDggMTQuNTczNyA0MS4xMzAxIDE1Ljc2ODlMNDcuODgyOCAxMS44NjhDNDguMjcyOCAxMS42NDQxIDQ4LjcxNTQgMTEuNTI4MSA0OS4xNjUxIDExLjUzMTlDNDkuNjE0OCAxMS41MzU3IDUwLjA1NTQgMTEuNjU5MiA1MC40NDE1IDExLjg4OTdINTAuNDQ3NlpNMTguNzM0MSAzNC41NTk0TDIxLjY4MjQgMzYuMjYyQzIxLjkxNzkgMzUuMTM5MiAyMS45MTc5IDMzLjk3OTYgMjEuNjgyNCAzMi44NTY4TDE4LjczMDUgMzQuNTU3TDE4LjczNDEgMzQuNTU5NFpNMjYuMjIyNCAzOC44ODU5TDQ2LjYwNyA1MC42NTQ5VjI3LjEwMzdDNDQuMDExNSAyNi41OTgxIDQxLjYyNjQgMjUuMzI4MyAzOS43NTc5IDIzLjQ1NzNDMzkuNTM4NCAyMy4yMzc4IDM5LjMyNzQgMjMuMDExMSAzOS4xMjQ4IDIyLjc3NzJMMzIuODA3NCAyNi40MjM2QzMyLjc2NTIgMjYuNDUxNCAzMi43MjE4IDI2LjQ3OTEgMzIuNjc3MiAyNi41MDU2TDI2LjIyMzYgMzAuMjMwNUMyNy4xODQyIDMzLjAzNDQgMjcuMTg0MiAzNi4wNzg0IDI2LjIyMzYgMzguODgyM0wyNi4yMjI0IDM4Ljg4NTlaTTM5LjEzMDggNjMuNzYxMUwyNi4yMjI0IDcxLjIwMjNDMjcuMTgzIDc0LjAwNjIgMjcuMTgzIDc3LjA1MDIgMjYuMjIyNCA3OS44NTQxTDMyLjY3NiA4My41NzlMMzkuMTI2IDg3LjMwMjZDMzkuMzI4NiA4Ny4wNjg2IDM5LjUzOTYgODYuODQxOSAzOS43NTkxIDg2LjYyMjVDNDEuNjI3NiA4NC43NTE1IDQ0LjAxMjcgODMuNDgxNiA0Ni42MDgyIDgyLjk3Nkw0Ni42MDcgNTkuNDQwNkwzOS4xMzA4IDYzLjc2MTFaTTIxLjY3ODggNzMuODI4NkwxOC43MzA1IDc1LjUzMTJMMjEuNjggNzcuMjMxNEMyMS45MTU1IDc2LjEwODYgMjEuOTE1NSA3NC45NDkgMjEuNjggNzMuODI2MkwyMS42Nzg4IDczLjgyODZaTTE2LjIwNDMgNzEuMTQwOEwxOS4xNDUzIDY5LjQ0M0MxOC4yOTQ2IDY4LjY3NjMgMTcuMjkyOCA2OC4wOTYzIDE2LjIwNDMgNjcuNzQwM1Y3MS4xNDA4Wk0yMy42ODA1IDY2LjgyMTVDMjMuNDc3MSA2Ni41ODc2IDIzLjI2NTcgNjYuMzYwOSAyMy4wNDYyIDY2LjE0MTRDMjEuMTc4NyA2NC4yNjk2IDE4Ljc5MzcgNjIuOTk5NyAxNi4xOTgzIDYyLjQ5NVY0Ny41OTMzQzE4Ljc5NTIgNDcuMDkwMSAyMS4xODIzIDQ1LjgyMTQgMjMuMDUyMiA0My45NTA0QzIzLjI3MTcgNDMuNzMxIDIzLjQ4MzEgNDMuNTA0MyAyMy42ODY1IDQzLjI3MDNMNDQuMDg1NiA1NS4wNDQxTDIzLjY4NjUgNjYuODI1MUwyMy42ODA1IDY2LjgyMTVaTTE5LjE0NTMgNDAuNjQ1MkwxNi4yMDQzIDM4Ljk0NzRWNDIuMzQ3OUMxNy4yOTI4IDQxLjk5MTkgMTguMjk0NiA0MS40MTE5IDE5LjE0NTMgNDAuNjQ1MlpNNDYuNjA3IDkxLjYzMTVWODguMjMxMUM0NS41MTc5IDg4LjU4NTYgNDQuNTE1OCA4OS4xNjU4IDQzLjY2NiA4OS45MzM3TDQ2LjYwNyA5MS42MzE1Wk01NC4yMTQ2IDU1LjA0NDFMNzQuNjEzNyA2Ni44MjE1Qzc0LjgxNjMgNjYuNTg3NiA3NS4wMjg1IDY2LjM2MDkgNzUuMjQ2NyA2Ni4xNDE0Qzc3LjExNDkgNjQuMjY5OCA3OS41MDAyIDYyLjk5OTkgODIuMDk1OSA2Mi40OTVWNDcuNTkzM0M3OS41MDA0IDQ3LjA4NzcgNzcuMTE1MyA0NS44MTc4IDc1LjI0NjcgNDMuOTQ2OEM3NS4wMjg1IDQzLjcyNzQgNzQuODE2MyA0My41MDA3IDc0LjYxMzcgNDMuMjY2N0w1NC4yMTQ2IDU1LjA0NDFaTTc5LjE1NDggNjkuNDQzTDgyLjA5NTkgNzEuMTQwOFY2Ny43NDAzQzgxLjAwNzQgNjguMDk2MyA4MC4wMDU1IDY4LjY3NjMgNzkuMTU0OCA2OS40NDNaTTc5LjU2OTcgNzUuNTMxMkw3Ni42MjE0IDczLjgyODZDNzYuMzg1OSA3NC45NTE1IDc2LjM4NTkgNzYuMTExIDc2LjYyMTQgNzcuMjMzOUw3OS41Njk3IDc1LjUzMTJaTTcyLjA3NzggNzEuMjAyM0M3MS4xMTcyIDc0LjAwNjIgNzEuMTE3MiA3Ny4wNTAyIDcyLjA3NzggNzkuODU0MUw2NS42MjQyIDgzLjU3OUM2NS41Nzk2IDgzLjYwNTUgNjUuNTM2MiA4My42MzIgNjUuNDk0IDgzLjY2MUw1OS4xNzY2IDg3LjMwNzRDNTguOTc0IDg3LjA3MzUgNTguNzYzIDg2Ljg0NjggNTguNTQzNSA4Ni42MjczQzU2LjY3NSA4NC43NTYzIDU0LjI4OTkgODMuNDg2NSA1MS42OTQ0IDgyLjk4MDlMNTEuNjkzMiA1OS40MzdMNzIuMDc5IDcxLjIwNTlMNzIuMDc3OCA3MS4yMDIzWk01MS42OTMyIDg4LjIzMTFWOTEuNjMxNUw1NC42MzQyIDg5LjkzMzdDNTMuNzg0MiA4OS4xNjYgNTIuNzgyMiA4OC41ODU5IDUxLjY5MzIgODguMjMxMVpNODIuMDk1OSAzOC45NDc0TDc5LjE1NDggNDAuNjQ1MkM4MC4wMDU1IDQxLjQxMTkgODEuMDA3NCA0MS45OTE5IDgyLjA5NTkgNDIuMzQ3OVYzOC45NDc0Wk00Ni42MDcgMjEuODU3MlYxOC40NTc5TDQzLjY2NiAyMC4xNTQ1QzQ0LjUxNTggMjAuOTIyNCA0NS41MTc5IDIxLjUwMjYgNDYuNjA3IDIxLjg1NzJaTTUxLjY5MzIgMTguNDU3OVYyMS44NTcyQzUyLjc4MjIgMjEuNTAyMyA1My43ODQyIDIwLjkyMjIgNTQuNjM0MiAyMC4xNTQ1TDUxLjY5MzIgMTguNDU3OVpNNTEuNjkzMiAyNy4xMDM3QzU0LjI4ODcgMjYuNTk4MSA1Ni42NzM4IDI1LjMyODMgNTguNTQyMyAyMy40NTczQzU4Ljc2MTggMjMuMjM3OCA1OC45NzI4IDIzLjAxMTEgNTkuMTc1NCAyMi43NzcyTDY1LjYyNTQgMjYuNTAwOEw3Mi4wNzkgMzAuMjI1NkM3MS4xMTg0IDMzLjAyOTYgNzEuMTE4NCAzNi4wNzM1IDcyLjA3OSAzOC44Nzc1TDUxLjY5MzIgNTAuNjUxM1YyNy4xMDM3Wk03Ni42MjE0IDM2LjI1OTZMNzkuNTY5NyAzNC41NTdMNzYuNjIwMiAzMi44NTY4Qzc2LjM4NDcgMzMuOTc5NiA3Ni4zODQ3IDM1LjEzOTIgNzYuNjIwMiAzNi4yNjJMNzYuNjIxNCAzNi4yNTk2Wk0yMy42ODUzIDg0LjI1MThDMjMuNDgyNyA4NC40ODQ5IDIzLjI3MjUgODQuNzEgMjMuMDU0NiA4NC45MjcxQzIxLjU4NjYgODYuMzk0OSAxOS43OTUgODcuNDk4MiAxNy44MjM1IDg4LjE0ODRDMTUuODUyMSA4OC43OTg2IDEzLjc1NTYgODguOTc3NiAxMS43MDI0IDg4LjY3MTJDOS42NDkyNSA4OC4zNjQ3IDcuNjk2NDggODcuNTgxMiA2LjAwMDgzIDg2LjM4MzZDNC4zMDUxNyA4NS4xODYgMi45MTM4MyA4My42MDc2IDEuOTM4NDYgODEuNzc1MUMwLjk2MzA4NiA3OS45NDI2IDAuNDMwODI2IDc3LjkwNjkgMC4zODQzOTUgNzUuODMxNUMwLjMzNzk2MyA3My43NTYxIDAuNzc4NjUgNzEuNjk4NyAxLjY3MTA5IDY5LjgyNDRDMi41NjM1NCA2Ny45NTAxIDMuODgyOSA2Ni4zMTExIDUuNTIzMjkgNjUuMDM4OEM3LjE2MzY5IDYzLjc2NjYgOS4wNzk0NyA2Mi44OTY2IDExLjExNjkgNjIuNDk4NlY0Ny41OTMzQzkuMDc4ODQgNDcuMTk1OCA3LjE2MjM1IDQ2LjMyNiA1LjUyMTI1IDQ1LjA1MzhDMy44ODAxNiA0My43ODE3IDIuNTYwMTYgNDIuMTQyNCAxLjY2NzIxIDQwLjI2NzhDMC43NzQyNjIgMzguMzkzMSAwLjMzMzIzMyAzNi4zMzUzIDAuMzc5NTIyIDM0LjI1OTNDMC40MjU4MTEgMzIuMTgzNCAwLjk1ODEzIDMwLjE0NzIgMS45MzM3NSAyOC4zMTQyQzIuOTA5MzcgMjYuNDgxMiA0LjMwMTEyIDI0LjkwMjUgNS45OTcyOSAyMy43MDQ3QzcuNjkzNDYgMjIuNTA3IDkuNjQ2ODIgMjEuNzIzNSAxMS43MDA2IDIxLjQxNzNDMTMuNzU0MyAyMS4xMTEgMTUuODUxMyAyMS4yOTA1IDE3LjgyMzEgMjEuOTQxM0MxOS43OTQ5IDIyLjU5MjEgMjEuNTg2NyAyMy42OTYyIDIzLjA1NDYgMjUuMTY0OEMyMy4yNzI5IDI1LjM4MyAyMy40ODI3IDI1LjYwNzMgMjMuNjg1MyAyNS44NEwzMC4xMzY1IDIyLjExNTJDMzAuMTgyMyAyMi4wODg3IDMwLjIyOTQgMjIuMDYzNCAzMC4yNzc2IDIyLjAzOTJMMzYuNTkxMyAxOC4zOTUyQzM1LjkwMzIgMTYuMzk0NyAzNS43MDI5IDE0LjI1ODkgMzYuMDA3IDEyLjE2NTNDMzYuMzExIDEwLjA3MTggMzcuMTEwNyA4LjA4MTE4IDM4LjMzOTUgNi4zNTkxMkMzOS41NjgyIDQuNjM3MDYgNDEuMTkwNSAzLjIzMzM4IDQzLjA3MTMgMi4yNjQ5MUM0NC45NTIxIDEuMjk2NDMgNDcuMDM3IDAuNzkxMTY0IDQ5LjE1MjUgMC43OTExNjRDNTEuMjY4IDAuNzkxMTY0IDUzLjM1MjkgMS4yOTY0MyA1NS4yMzM3IDIuMjY0OTFDNTcuMTE0NSAzLjIzMzM4IDU4LjczNjggNC42MzcwNiA1OS45NjU1IDYuMzU5MTJDNjEuMTk0MyA4LjA4MTE4IDYxLjk5NCAxMC4wNzE4IDYyLjI5OCAxMi4xNjUzQzYyLjYwMjEgMTQuMjU4OSA2Mi40MDE4IDE2LjM5NDcgNjEuNzEzNyAxOC4zOTUyTDY4LjE2NjEgMjIuMTJMNzQuNjE3MyAyNS44NDQ4Qzc0LjgxODcgMjUuNjEyMSA3NS4wMjk3IDI1LjM4NzggNzUuMjQ2NyAyNS4xNjk2Qzc2LjcxNDggMjMuNzAxOCA3OC41MDY0IDIyLjU5ODUgODAuNDc3OSAyMS45NDgzQzgyLjQ0OTMgMjEuMjk4MSA4NC41NDU4IDIxLjExOSA4Ni41OTkgMjEuNDI1NUM4OC42NTIxIDIxLjczMiA5MC42MDQ5IDIyLjUxNTQgOTIuMzAwNiAyMy43MTNDOTMuOTk2MiAyNC45MTA2IDk1LjM4NzYgMjYuNDg5IDk2LjM2MjkgMjguMzIxNkM5Ny4zMzgzIDMwLjE1NDEgOTcuODcwNiAzMi4xODk3IDk3LjkxNyAzNC4yNjUxQzk3Ljk2MzQgMzYuMzQwNSA5Ny41MjI3IDM4LjM5NzkgOTYuNjMwMyA0MC4yNzIzQzk1LjczNzggNDIuMTQ2NiA5NC40MTg1IDQzLjc4NTYgOTIuNzc4MSA0NS4wNTc4QzkxLjEzNzcgNDYuMzMwMSA4OS4yMjE5IDQ3LjIwMDEgODcuMTg0NSA0Ny41OTgxVjYyLjQ5NUM4OS4yMjI1IDYyLjg5MjQgOTEuMTM5IDYzLjc2MjIgOTIuNzgwMSA2NS4wMzQ0Qzk0LjQyMTIgNjYuMzA2NiA5NS43NDEyIDY3Ljk0NTggOTYuNjM0MiA2OS44MjA0Qzk3LjUyNzEgNzEuNjk1MSA5Ny45NjgyIDczLjc1MjkgOTcuOTIxOSA3NS44Mjg5Qzk3Ljg3NTYgNzcuOTA0OCA5Ny4zNDMzIDc5Ljk0MSA5Ni4zNjc2IDgxLjc3NEM5NS4zOTIgODMuNjA3IDk0LjAwMDMgODUuMTg1NyA5Mi4zMDQxIDg2LjM4MzVDOTAuNjA3OSA4Ny41ODEzIDg4LjY1NDYgODguMzY0NyA4Ni42MDA4IDg4LjY3MUM4NC41NDcxIDg4Ljk3NzIgODIuNDUwMSA4OC43OTc3IDgwLjQ3ODMgODguMTQ2OUM3OC41MDY1IDg3LjQ5NjEgNzYuNzE0NyA4Ni4zOTIxIDc1LjI0NjcgODQuOTIzNUM3NS4wMjk3IDg0LjcwNjQgNzQuODE4NyA4NC40ODA5IDc0LjYxNzMgODQuMjQ4Mkw2OC4xNjYxIDg3Ljk3MThDNjguMTIwMyA4Ny45OTk1IDY4LjA3MiA4OC4wMjQ5IDY4LjAyNSA4OC4wNDlMNjEuNzExMyA5MS43MDE1QzYyLjM5OTMgOTMuNzAxOSA2Mi41OTk3IDk1LjgzNzggNjIuMjk1NiA5Ny45MzEzQzYxLjk5MTYgMTAwLjAyNSA2MS4xOTE5IDEwMi4wMTUgNTkuOTYzMSAxMDMuNzM4QzU4LjczNDQgMTA1LjQ2IDU3LjExMjEgMTA2Ljg2MyA1NS4yMzEzIDEwNy44MzJDNTMuMzUwNSAxMDguOCA1MS4yNjU2IDEwOS4zMDUgNDkuMTUwMSAxMDkuMzA1QzQ3LjAzNDYgMTA5LjMwNSA0NC45NDk3IDEwOC44IDQzLjA2ODkgMTA3LjgzMkM0MS4xODgxIDEwNi44NjMgMzkuNTY1OCAxMDUuNDYgMzguMzM3MSAxMDMuNzM4QzM3LjEwODMgMTAyLjAxNSAzNi4zMDg2IDEwMC4wMjUgMzYuMDA0NiA5Ny45MzEzQzM1LjcwMDUgOTUuODM3OCAzNS45MDA4IDkzLjcwMTkgMzYuNTg4OSA5MS43MDE1TDMwLjEzNjUgODcuOTc2NkwyMy42ODUzIDg0LjI1MThaTTExLjExNjkgNjcuNzQwM1Y3NS41MzM2SDExLjEyMjlDMTEuMTIyNCA3NS45Nzg2IDExLjIzOTIgNzYuNDE1OSAxMS40NjE1IDc2LjgwMTRDMTEuNjgzNyA3Ny4xODY4IDEyLjAwMzcgNzcuNTA3IDEyLjM4OSA3Ny43Mjk1TDE5LjE0MTcgODEuNjI3OUMxOC4yMzQ0IDgyLjQ0NjQgMTcuMTU1NiA4My4wNTE4IDE1Ljk4NDMgODMuMzk5N0MxNC44MTMgODMuNzQ3NyAxMy41Nzg3IDgzLjgyOTQgMTIuMzcxNyA4My42MzlDMTEuMTY0NyA4My40NDg2IDEwLjAxNTUgODIuOTkwOSA5LjAwODE0IDgyLjI5OTJDOC4wMDA4IDgxLjYwNzYgNy4xNjA3NyA4MC42OTk1IDYuNTQ5NDkgNzkuNjQxNUM1LjkzODIgNzguNTgzNSA1LjU3MTEyIDc3LjQwMjIgNS40NzUwNyA3Ni4xODRDNS4zNzkwMiA3NC45NjU5IDUuNTU2NDQgNzMuNzQxNyA1Ljk5NDM1IDcyLjYwMDlDNi40MzIyNyA3MS40NjAxIDcuMTE5NjEgNzAuNDMxNyA4LjAwNjExIDY5LjU5MDdDOC44OTI2IDY4Ljc0OTcgOS45NTU4NiA2OC4xMTc1IDExLjExODEgNjcuNzQwM0gxMS4xMTY5Wk04Ny4xODMzIDY3Ljc0MDNDODguMzQ1NSA2OC4xMTc1IDg5LjQwODggNjguNzQ5NyA5MC4yOTUzIDY5LjU5MDdDOTEuMTgxOCA3MC40MzE3IDkxLjg2OTEgNzEuNDYwMSA5Mi4zMDcgNzIuNjAwOUM5Mi43NDQ5IDczLjc0MTcgOTIuOTIyNCA3NC45NjU5IDkyLjgyNjMgNzYuMTg0QzkyLjczMDMgNzcuNDAyMiA5Mi4zNjMyIDc4LjU4MzUgOTEuNzUxOSA3OS42NDE1QzkxLjE0MDYgODAuNjk5NSA5MC4zMDA2IDgxLjYwNzYgODkuMjkzMiA4Mi4yOTkyQzg4LjI4NTkgODIuOTkwOSA4Ny4xMzY3IDgzLjQ0ODYgODUuOTI5NyA4My42MzlDODQuNzIyNyA4My44Mjk0IDgzLjQ4ODQgODMuNzQ3NyA4Mi4zMTcxIDgzLjM5OTdDODEuMTQ1NyA4My4wNTE4IDgwLjA2NyA4Mi40NDY0IDc5LjE1OTcgODEuNjI3OUw4NS43NTA4IDc3LjgyMjNDODYuMTgwNyA3Ny42MTM2IDg2LjU0MzEgNzcuMjg4IDg2Ljc5NjUgNzYuODgyOEM4Ny4wNDk4IDc2LjQ3NzUgODcuMTgzOSA3Ni4wMDkxIDg3LjE4MzMgNzUuNTMxMlY2Ny43NDAzWk01Ny4xNjc3IDk0LjMxOTNMNTAuNDE1IDk4LjIyMDJDNTAuMDI1IDk4LjQ0NDEgNDkuNTgyNCA5OC41NjAxIDQ5LjEzMjcgOTguNTU2M0M0OC42ODMgOTguNTUyNSA0OC4yNDI0IDk4LjQyOSA0Ny44NTYyIDk4LjE5ODVMNDEuMTM2MSA5NC4zMTkzQzQwLjg4MDggOTUuNTE0NSA0MC44OTYgOTYuNzUxNyA0MS4xODA0IDk3Ljk0MDNDNDEuNDY0OCA5OS4xMjg5IDQyLjAxMTQgMTAwLjIzOSA0Mi43OCAxMDEuMTg5QzQzLjU0ODcgMTAyLjEzOSA0NC41MjAxIDEwMi45MDYgNDUuNjIzIDEwMy40MzJDNDYuNzI2IDEwMy45NTkgNDcuOTMyNyAxMDQuMjMyIDQ5LjE1NDkgMTA0LjIzMkM1MC4zNzcxIDEwNC4yMzIgNTEuNTgzOCAxMDMuOTU5IDUyLjY4NjggMTAzLjQzMkM1My43ODk4IDEwMi45MDYgNTQuNzYxMSAxMDIuMTM5IDU1LjUyOTggMTAxLjE4OUM1Ni4yOTg1IDEwMC4yMzkgNTYuODQ1IDk5LjEyODkgNTcuMTI5NCA5Ny45NDAzQzU3LjQxMzkgOTYuNzUxNyA1Ny40MjkgOTUuNTE0NSA1Ny4xNzM3IDk0LjMxOTNINTcuMTY3N1pNMTEuMTE2OSA0Mi4zNDc5QzkuOTU0NjUgNDEuOTcwNyA4Ljg5MTQgNDEuMzM4NSA4LjAwNDkgNDAuNDk3NUM3LjExODQgMzkuNjU2NSA2LjQzMTA2IDM4LjYyODEgNS45OTMxNSAzNy40ODczQzUuNTU1MjMgMzYuMzQ2NSA1LjM3NzgxIDM1LjEyMjMgNS40NzM4NiAzMy45MDQyQzUuNTY5OTEgMzIuNjg2IDUuOTM3IDMxLjUwNDggNi41NDgyOCAzMC40NDY3QzcuMTU5NTcgMjkuMzg4NyA3Ljk5OTYgMjguNDgwNiA5LjAwNjk0IDI3Ljc4OUMxMC4wMTQzIDI3LjA5NzQgMTEuMTYzNSAyNi42Mzk2IDEyLjM3MDUgMjYuNDQ5MkMxMy41Nzc1IDI2LjI1ODggMTQuODExOCAyNi4zNDA2IDE1Ljk4MzEgMjYuNjg4NUMxNy4xNTQ0IDI3LjAzNjUgMTguMjMzMiAyNy42NDE4IDE5LjE0MDUgMjguNDYwM0wxMi41NDk0IDMyLjI2NTlDMTIuMTE5NSAzMi40NzQ2IDExLjc1NzEgMzIuODAwMiAxMS41MDM3IDMzLjIwNTVDMTEuMjUwMyAzMy42MTA3IDExLjExNjMgMzQuMDc5MSAxMS4xMTY5IDM0LjU1N1Y0Mi4zNTAzVjQyLjM0NzlaTTc5LjE1OTcgMjguNDYwM0M4MC4wNjcgMjcuNjQxOCA4MS4xNDU3IDI3LjAzNjUgODIuMzE3MSAyNi42ODg1QzgzLjQ4ODQgMjYuMzQwNiA4NC43MjI3IDI2LjI1ODggODUuOTI5NyAyNi40NDkyQzg3LjEzNjcgMjYuNjM5NiA4OC4yODU5IDI3LjA5NzQgODkuMjkzMiAyNy43ODlDOTAuMzAwNiAyOC40ODA2IDkxLjE0MDYgMjkuMzg4NyA5MS43NTE5IDMwLjQ0NjdDOTIuMzYzMiAzMS41MDQ4IDkyLjczMDMgMzIuNjg2IDkyLjgyNjMgMzMuOTA0MkM5Mi45MjI0IDM1LjEyMjMgOTIuNzQ0OSAzNi4zNDY1IDkyLjMwNyAzNy40ODczQzkxLjg2OTEgMzguNjI4MSA5MS4xODE4IDM5LjY1NjUgOTAuMjk1MyA0MC40OTc1Qzg5LjQwODggNDEuMzM4NSA4OC4zNDU1IDQxLjk3MDcgODcuMTgzMyA0Mi4zNDc5VjM0LjU1NDZDODcuMTgzOCAzNC4xMDk2IDg3LjA2NyAzMy42NzIzIDg2Ljg0NDcgMzMuMjg2OUM4Ni42MjI1IDMyLjkwMTQgODYuMzAyNSAzMi41ODEzIDg1LjkxNzIgMzIuMzU4OEw3OS4xNTk3IDI4LjQ2MDNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTVfMikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNV8yIiB4MT0iOS4wNzExNCIgeTE9IjI3LjM5NjgiIHgyPSI2MC44MDY4IiB5Mj0iMTAyLjM1NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTMzM0VBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRGNDZFNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=';

export const dynamic = 'force-static';

export const GET = polyglotMetadataImage.createAPI((page) => {
    return GenerateDocsOGImage({
        title: page.data.title,
        description: page.data.description || '',
        section: 'polyglot',
        icon: <img src={polyglotIconDataURL} height={48} width={43}/>,
    });
});

export function generateStaticParams() {
    return polyglotMetadataImage.generateParams();
}