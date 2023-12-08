import { StyleSheet } from "@react-pdf/renderer";

export const styles5 = StyleSheet.create({
    page: {
      backgroundColor: '#E4E4E4',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    section: {
        padding: "15px",
        marginRight: "-15px",
        fontFamily: 'NanumSquareRoundB'
    },
    right: {
        textAlign: 'right',
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      leftColumn: {
        flexDirection: 'column',
        flexGrow: 9,
      },
      rightColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifySelf: 'flex-end',
        marginLeft:"35%"
      },
      title: {
        fontSize: 11,
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'NanumSquareRoundB',
      },
      date: {
        fontSize: 11,
        fontFamily: 'NanumSquareRoundB',
      },
  });
  