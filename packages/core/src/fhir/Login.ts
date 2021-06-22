/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Meta } from './Meta';
import { Reference } from './Reference';

/**
 * OAuth login.
 */
export interface Login {

  /**
   * This is a Login resource
   */
  readonly resourceType: 'Login';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * The client requesting the code.
   */
  readonly client?: Reference;

  /**
   * The user requesting the code.
   */
  readonly user?: Reference;

  /**
   * Reference to the user's FHIR identity for this login (patient,
   * practitioner, etc).
   */
  readonly profile?: Reference;

  /**
   * OAuth scope or scopes.
   */
  readonly scope?: string;

  /**
   * Optional secure random string that can be used in an OAuth refresh
   * token.
   */
  readonly refreshSecret?: string;
}
