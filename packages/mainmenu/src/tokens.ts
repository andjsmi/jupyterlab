// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { MenuFactory } from '@jupyterlab/apputils';
import { Token } from '@lumino/coreutils';
import { Menu } from '@lumino/widgets';
import { IEditMenu } from './edit';
import { IFileMenu } from './file';
import { IHelpMenu } from './help';
import { IKernelMenu } from './kernel';
import { IRunMenu } from './run';
import { ISettingsMenu } from './settings';
import { ITabsMenu } from './tabs';
import { IViewMenu } from './view';

/**
 * The main menu token.
 */
export const IMainMenu = new Token<IMainMenu>('@jupyterlab/mainmenu:IMainMenu');

/**
 * The main menu interface.
 */
export interface IMainMenu {
  /**
   * Add a new menu to the main menu bar.
   */
  addMenu(menu: Menu, options?: IMainMenu.IAddOptions): void;

  /**
   * The application "File" menu.
   */
  readonly fileMenu: IFileMenu;

  /**
   * The application "Edit" menu.
   */
  readonly editMenu: IEditMenu;

  /**
   * The application "View" menu.
   */
  readonly viewMenu: IViewMenu;

  /**
   * The application "Help" menu.
   */
  readonly helpMenu: IHelpMenu;

  /**
   * The application "Kernel" menu.
   */
  readonly kernelMenu: IKernelMenu;

  /**
   * The application "Run" menu.
   */
  readonly runMenu: IRunMenu;

  /**
   * The application "Settings" menu.
   */
  readonly settingsMenu: ISettingsMenu;

  /**
   * The application "Tabs" menu.
   */
  readonly tabsMenu: ITabsMenu;
}

/**
 * The namespace for IMainMenu attached interfaces.
 */
export namespace IMainMenu {
  /**
   * The options used to add a menu to the main menu.
   */
  export interface IAddOptions {
    /**
     * The rank order of the menu among its siblings.
     */
    rank?: number;
  }

  /**
   * The instantiation options for an IMainMenu.
   */
  export interface IMenuOptions extends MenuFactory.IMenuOptions {}
}
