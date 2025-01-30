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
      width: { xl: '90%', lg: '95%', md: '100%', sm: '100%', xs: '100%' },
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
      },
      boxTable: {
        mt: { xl: 4, lg: 3, md: 3, sm: 1, xs: 1 },
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
                  '&.colUser': {
                    width: { md: '30vw' },
                  },
                  '&.colEmail': {},
                  '&.colAssignedRoles': {
                    width: { lg: '13vw', md: '8vw' },
                  },
                  '&.colRol': {
                    width: { lg: '28vw', md: '35vw' },
                  },
                },
              },
            },
            '& .MuiTableBody-root': {
              '& .MuiTableRow-root': {
                '& .MuiTableCell-body': {
                  pt: { md: 1.438, sm: 3, xs: 3 },
                  pb: { md: 1.438, sm: 5, xs: 5 },
                  p: 1.438,
                  textAlign: 'left',
                  '&>.MuiTypography-root': {
                    mt: { md: 0, sm: 1, xs: 1 },
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
                  '&.colUser': {
                    width: { md: '30vw' },
                  },
                  '&.colEmail': {
                    '& .MuiTypography-root': {
                      width: '14vw',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    },
                  },
                  '&.colAssignedRoles': {
                    width: { lg: '10vw', md: '8vw' },
                  },
                  '&.colRol': {
                    width: { lg: '28vw', md: '35vw' },
                    verticalAlign: 'top',
                  },
                  '& .MuiStack-root': {
                    mt: { md: 0, sm: 1, xs: 1 },
                    display: { sm: 'block', xs: 'block' },
                    '& .MuiChip-root': {
                      m: '0.3vh',
                      justifyContent: 'space-between',
                      width: { xl: '80%', lg: '85%', md: '100%', sm: 'auto', xs: 'auto' },
                      fontSize: { xl: '0.65vw', lg: '0.95vw', md: '1.15vw' },
                    },
                  },
                  '& .MuiFormControl-root': {
                    mb: 1,
                    '& .MuiFormLabel-root': {
                      fontSize: {
                        xl: '0.833335vw',
                        lg: '1.1vw',
                        md: '1.38vw',
                        sm: '1.83vw',
                        xs: '4.4vw',
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
      boxForm: {
        mt: { xl: '0vh', lg: '1vh' },
        '& .MuiFormControl-root': {
          mt: 3,
          width: '100%',
        },
      },
      boxEvents: {
        display: 'flex',
        marginTop: '2.0vh',
      },
      boxButton: {
        mt: 3,
      },
    },
  },
};
