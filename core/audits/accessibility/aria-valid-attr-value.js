/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Ensures all ARIA attributes have valid values.
 * See base class in axe-audit.js for audit() implementation.
 */

import AxeAudit from './axe-audit.js';
import * as i18n from '../../lib/i18n/i18n.js';

const UIStrings = {
  /** Title of an accesibility audit that evaluates if all elements that have an ARIA HTML attribute have a valid value for that attribute. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: '`[aria-*]` attributes have valid values',
  /** Title of an accesibility audit that evaluates if all elements that have an ARIA HTML attribute have a valid value for that attribute. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: '`[aria-*]` attributes do not have valid values',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. The last sentence starting with 'Learn' becomes link text to additional documentation. */
  description: 'Assistive technologies, like screen readers, can\'t interpret ARIA ' +
      'attributes with invalid values. [Learn ' +
      'more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr-value).',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);

class ARIAValidAttr extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'aria-valid-attr-value',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

export default ARIAValidAttr;
export {UIStrings};
