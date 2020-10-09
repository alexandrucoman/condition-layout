import React, { FC } from 'react'

import { validateConditions } from './modules/conditions'
import type { MatchType, Condition } from './types'

type Props = {
  matchType?: MatchType
  conditions: Condition[]
  Else?: React.ComponentType
  Then?: React.ComponentType
  values: Record<string, unknown>
  handlers: Record<string, unknown>
}

const ConditionLayout: FC<Props> = ({
  Else,
  Then,
  conditions,
  children,
  values,
  handlers,
  matchType = 'all',
}) => {
  const result = validateConditions({ matchType, conditions, values, handlers })

  if (result) {
    if (Then) {
      return <Then />
    }

    return <>{children}</>
  }

  if (Else) {
    return <Else />
  }

  return null
}

export default ConditionLayout
