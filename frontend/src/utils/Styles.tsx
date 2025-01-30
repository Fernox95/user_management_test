export const useStyles = {
  containerFull: {
    display: 'flex',
    justifyContent: 'center',
    '@media (min-width: 0px)': {
      pr: '0',
      pl: '0',
    },
  },
  boxContainer: {
    width: { xl: '58vw', lg: '58vw', md: '58vw', sm: '70vw', xs: '80vw' },
    boxContent: {
      pt: '8vh',
      pb: '8vh',
      boxTextSection: {
        '&>.MuiTypography-root': {
          fontSize: { xl: '1.875vw', lg: '1.875vw', md: '2.75vw', sm: '3vw', xs: '8vw' },
          fontFamily: 'Roboto-Medium',
        },
      },
      boxTextTitle: {
        mt: { xl: 3, lg: 3, md: 2, sm: 2, xs: 1 },
        '&>.MuiTypography-root': {
          fontSize: { xl: '1.041668vw', lg: '1.3vw', md: '1.8vw', sm: '2.4vw', xs: '5vw' },
          fontFamily: 'Roboto-Medium',
        },
        mb: 1,
      },
      '& .MuiFormControl-root': {
        mt: { xl: 2, lg: 2, md: 2, sm: 1, xs: 1 },
      },
      boxTable: {
        mt: { xl: 4, lg: 3, md: 3, sm: 2, xs: 2 },
        '& .MuiTableContainer-root': {
          '& .MuiTable-root': {
            '& .MuiTableHead-root': {
              '& .MuiTableRow-head': {
                '& .MuiTableCell-head': {
                  p: 2,
                  textAlign: 'left',
                  '& .MuiTypography-root': {
                    textAlign: 'left',
                    fontFamily: 'Roboto-Medium',
                    fontSize: {
                      xl: '0.833335vw',
                      lg: '1.1vw',
                      md: '1.38vw',
                      sm: '2.4vw',
                      xs: '5vw',
                    },
                  },
                  '&.headUser': {
                    width: '33.5%',
                  },
                  '&.headEmail': {
                    width: '41%',
                  },
                  '&.headAscription': {
                    width: '25.5%',
                  },
                },
              },
            },
            '& .MuiTableBody-root': {
              '& .MuiTableRow-root': {
                position: { md: 'static', sm: 'relative', xs: 'relative' },
                '& .MuiTableCell-body': {
                  p: 1.438,
                  textAlign: 'left',
                  '&>.MuiTypography-root': {
                    textAlign: 'left',
                    fontSize: {
                      xl: '0.833335vw',
                      lg: '1.1vw',
                      md: '1.38vw',
                      sm: '1.83vw',
                      xs: '4.4vw',
                    },
                    '& span': {
                      fontFamily: 'Roboto-Medium',
                      fontSize: { sm: '2vw', xs: '4.6vw' },
                    },
                  },
                  '& .MuiAlert-root': {
                    '& .MuiAlert-message': {
                      '& .MuiTypography-root': {
                        fontSize: { sm: '1.83vw', xs: '4.4vw' },
                      },
                    },
                  },
                },
              },
            },
            '& .MuiTableFooter-root': {
              '& .MuiTableRow-footer': {
                '& .MuiTablePagination-root': {
                  border: 0,
                  display: { md: 'table-cell', sm: 'flex', xs: 'flex' },
                  justifyContent: { sm: 'end', xs: 'center' },
                  '& .MuiTablePagination-toolbar': {
                    pl: { xs: 0 },
                    '& .MuiTablePagination-spacer': {
                      display: { md: 'block', sm: 'none', xs: 'none' },
                    },
                    '& .MuiTablePagination-selectLabel': {
                      fontSize: { xl: '0.833335vw', lg: '0.9vw', md: '1.1vw', sm: '1.88vw' },
                    },
                    '& .MuiTablePagination-input': {
                      mr: { md: 2, sm: 1, xs: 0 },
                      ml: { md: 1, sm: 0, xs: 0 },
                      fontSize: {
                        xl: '0.833335vw',
                        lg: '0.9vw',
                        md: '1.1vw',
                        sm: '1.88vw',
                        xs: '',
                      },
                    },
                    '& .MuiTablePagination-displayedRows': {
                      display: { md: 'block', sm: 'none', xs: 'none' },
                      fontSize: { xl: '0.833335vw', lg: '0.9vw', md: '1.1vw', sm: '1.88vw' },
                    },
                  },
                },
              },
            },
          },
        },
        '& .MuiAlert-root': {
          '& .MuiAlert-message': {
            '& .MuiTypography-root': {
              fontSize: { xl: '0.833335vw', lg: '0.9vw', md: '1.38vw' },
            },
          },
        },
        boxPaginationActions: {
          flexShrink: 0,
          ml: 2,
        },
      },
    },
  },
};
