import styled from 'styled-components'
import loginLeft from '@/assets/img/login-left.png'

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalLeft = styled.div`
  display: flex;
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  > .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 16px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    color: #ccc;
    cursor: pointer;

    :hover {
      color: #fff;
      border-color: #fff;
    }
  }

  .login {
    color: #ccc;
    cursor: pointer;
    :hover {
      color: #fff;
      border-color: #fff;
      text-decoration: underline;
    }
  }
`
