import { StyleSheet } from '@react-pdf/renderer'

export const styles3 = StyleSheet.create({
    pageWraper: {
        backgroundColor: '#fff',
        fontSize: 12,
        paddingTop: 25,
        paddingBottom: 5,
        fontFamily: 'NanumSquareRoundB',
        orientation: 'portrait',
    },
    page: {
        flexDirection: 'column',
    },
    header: {
        fontSize: 20,
    },
    twoSides: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 30px 3px 10px',
    },
    textsize: {
        fontSize:15,
    },
    BottomLine: {
        borderBottom:"1px solid #EBEBEB",
        marginLeft:"15px",
        paddingRight:"5px",
        width:"90%"
        // marginRight:"30px",
    }

});