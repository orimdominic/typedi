import { AnyInjectIdentifier } from '../types/inject-identifier.type';

/**
 * A set of configuration options for a dependency of a service.
 */
export interface ServiceDependencyOptions {
  /**
   * The mode of the dependency.
   * This is set with the use of the bit-flag helpers, such as {@see Optional}.
   *
   * @example
   * An example of this option can be seen below:
   * ```ts
   * @Service([
   *   DatabaseService,
   *   [TaskWorkerService, Optional() | Self()]
   * ])
   * export class RootService { }
   * ```
   */
  mode?: number;
}

/**
 * A tuple containing a service identifier, along with a set of options for said dependency.
 */
export type DependencyPairWithConfiguration =
  | readonly [AnyInjectIdentifier, number]
  | readonly [AnyInjectIdentifier, ServiceDependencyOptions];

/**
 * In the context of the Service decorator, any item in the dependencies array can either
 * be an injectable identifier (which is assumed to resolve in the current scope), or a
 * two-item tuple, containing both the identifier and a set of options.
 */
export type AnyServiceDependency = DependencyPairWithConfiguration | AnyInjectIdentifier;
