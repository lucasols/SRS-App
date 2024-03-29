import { centerContent } from '@src/style/helpers/centerContent'
import { fillContainer } from '@src/style/helpers/fillContainer'
import { responsiveWidth } from '@src/style/helpers/responsiveSize'
import { transition } from '@src/style/helpers/transition'
import { colors } from '@src/style/theme'
import { useAnimateMount } from '@src/utils/hooks/useAnimateMount'
import { cx } from '@utils/cx'
import { createEffect, createSignal, JSX, on } from 'solid-js'
import { Portal } from 'solid-js/web'
import { css } from 'solid-styled-components'

const containerStyle = css`
  width: 100%;
  height: 100%;
  ${centerContent};
`

const bgStyle = css`
  ${fillContainer}
  ${transition()};

  &:not(.disableBgStyle) {
    background: ${colors.bgPrimary.alpha(0.6)};
    backdrop-filter: blur(20px);
  }

  .modal-container-from &,
  .modal-container-exit & {
    opacity: 0;
  }

  .modal-container-appear & {
    opacity: 1;
  }
`

interface AddCardProps {
  show: boolean
  onClose?: () => any
  children: JSX.Element
  animClass?: string
  disableBgStyle?: boolean
}

const ModalContainer = (props: AddCardProps) => {
  const animModal = useAnimateMount(
    () => props.show,
    props.animClass ?? 'modal-container',
  )

  return (
    <Portal mount={document.getElementById('modals')!}>
      <Show when={animModal.mount()}>
        <div class={cx(containerStyle, animModal.className())}>
          <div
            class={bgStyle}
            classList={{ disableBgStyle: props.disableBgStyle }}
            onClick={props.onClose}
          />

          {props.children}
        </div>
      </Show>
    </Portal>
  )
}

export default ModalContainer
