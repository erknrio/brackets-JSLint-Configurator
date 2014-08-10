/*global define, $, brackets, window, Mustache */
define(
    ['require', 'exports', 'module', 'options'],
    function (require, exports, module, options) {
        "use strict";
        
        var AppInit = brackets.getModule('utils/AppInit'),
            EditorManager = brackets.getModule('editor/EditorManager'),
            KeyEvent = brackets.getModule('utils/KeyEvent'),
            CommandManager = brackets.getModule('command/CommandManager'),
            Menus = brackets.getModule('command/Menus'),
            Dialogs = brackets.getModule('widgets/Dialogs'),
            ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
            JSLINT_CMD_ID = 'georapbox.jslint';
        
        // App Ready
        AppInit.appReady(function () {
            ExtensionUtils.loadStyleSheet(module, 'css/georapbox-jslint.css');
            
            var editMenu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU),
				cmdOptions = CommandManager.register('JSLint Configurator', JSLINT_CMD_ID, function () {
					options.showOptionsDialog();
				});
            
			editMenu.addMenuItem(JSLINT_CMD_ID, 'Ctrl-Alt-J');
        });
    }
);