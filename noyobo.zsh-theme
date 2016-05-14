# Clean, simple, compatible and meaningful.
# Tested on Linux, Unix and Windows under ANSI colors.
# It is recommended to use with a dark background.
# Colors: black, red, green, yellow, *blue, magenta, cyan, and white.
#
# Mar 2013 Yad Smood

# Git info
local git_info='$(git_prompt_info)'

NOYOBO_PROMPT_PREFIX1=" %{$fg[white]%}on%{$reset_color%} "
NOYOBO_PROMPT_PREFIX2=":%{$fg[cyan]%}"

ZSH_THEME_GIT_PROMPT_PREFIX="${NOYOBO_PROMPT_PREFIX1}git${NOYOBO_PROMPT_PREFIX2}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}"

ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}"

ZSH_THEME_GIT_PROMPT_DIRTY=" 🖌" # Ⓓ %{$fg[yellow]%} 
ZSH_THEME_GIT_PROMPT_UNTRACKED=" 💊" # ⓣ %{$fg[cyan]%} 
ZSH_THEME_GIT_PROMPT_CLEAN=" 💟" # Ⓞ %{$fg[green]%} 

ZSH_THEME_GIT_PROMPT_ADDED=" 😍" # ⓐ ⑃ %{$fg[cyan]%} 
ZSH_THEME_GIT_PROMPT_MODIFIED=" 😜"  # ⓜ ⑁ %{$fg[yellow]%} 
ZSH_THEME_GIT_PROMPT_DELETED=" 😵" # ⓧ ⑂ %{$fg[red]%}
ZSH_THEME_GIT_PROMPT_RENAMED=" 😴" # ⓡ ⑄ %{$fg[blue]%}
ZSH_THEME_GIT_PROMPT_UNMERGED=" 😱" # ⓤ ⑊ %{$fg[magenta]%}
ZSH_THEME_GIT_PROMPT_AHEAD=" 🤕" # %{$fg[blue]%}

local exit_code="%(?,, code: %{$fg[red]%}%?%{$reset_color%})"

# Prompt format:
#
# PRIVILEGES USER @ MACHINE in DIRECTORY on git:BRANCH STATE [TIME] C:LAST_EXIT_CODE
# $ COMMAND
#
# For example:
#
# % ys @ ys-mbp in ~/.oh-my-zsh on git:master x [21:47:42] C:0
# $
PROMPT="%{$terminfo[bold]$fg[blue]%}➜ %{$reset_color%} \
%{$fg[gray]%}🕑  %* \
%(#,%{$bg[yellow]%}%{$fg[black]%}%n%{$reset_color%},%{$fg[cyan]%}%n)\
%{$fg[white]%}:\
%{$terminfo[bold]$fg[yellow]%}%c%{$reset_color%}\
${git_info} \
$exit_code
%{$terminfo[bold]$fg[magenta]%}$ %{$reset_color%}"
