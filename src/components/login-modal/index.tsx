import { Button, Modal, QRCode, message } from 'antd'
import React, { memo, useState, useRef, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import type { DraggableData, DraggableEvent } from 'react-draggable'
import Draggable from 'react-draggable'
import { ModalWrapper } from './style'
import { createQrCode, getQrCodeKey, checkQrCodeStatus } from '@/service/login'

interface IProps {
  open: boolean
  handleOk?: () => void
  handleCancel?: () => void
  children?: ReactNode
}

const LoginModal: FC<IProps> = ({ open, handleCancel, handleOk }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
  const draggleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      createKey()
    }
  }, [open])

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement
    const targetRect = draggleRef.current?.getBoundingClientRect()
    if (!targetRect) {
      return
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y)
    })
  }
  const createKey = async () => {
    const res = await getQrCodeKey()
    console.log(res.data.unikey, 'res')
    const resData = await createQrCode(res.data.unikey)
    console.log(resData, 'resData')
    setQrCodeUrl(resData.data.qrurl)
    if (resData.data.qrurl) {
      pollAPI(res.data.unikey)
    }
  }

  const pollAPI = (key: string) => {
    let timer: any
    checkQrCodeStatus(key)
      .then((res) => {
        console.log('check', res)
        // message.info(res.message)
        // 在这里处理接口返回的数据
        if (res.code !== 803) {
          clearTimeout(timer)
          timer = setTimeout(() => pollAPI(key), 1000) // 1秒后再次调用轮询函数
        } else {
          document.cookie = res.cookie
        }
        // 如果需要继续轮询，可以在这里递归调用 pollAPI() 函数
      })
      .catch((error) => {
        // 在这里处理错误
        console.error(error)

        // 如果需要继续轮询，可以在这里递归调用 pollAPI() 函数
        setTimeout(pollAPI, 1000) // 1秒后再次调用轮询函数
      })
  }

  return (
    <>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
              borderBottom: '1px solid #2d2d2d'
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false)
              }
            }}
            onMouseOut={() => {
              setDisabled(true)
            }}
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            登录
          </div>
        }
        open={open}
        bodyStyle={{ padding: 0 }}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <ModalWrapper>
          <button onClick={createKey}>生成key</button>
          <QRCode value={qrCodeUrl} />
        </ModalWrapper>
      </Modal>
    </>
  )
}

export default memo(LoginModal)
