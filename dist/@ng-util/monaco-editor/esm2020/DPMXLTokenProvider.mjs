import { CharStreams } from 'antlr4ts';
import { dpm_xlLexer } from './grammar/dpm_xlLexer';
const EOF = -1;
export class DPMXLState {
    clone() {
        return new DPMXLState();
    }
    equals() {
        return true;
    }
}
export class DPMXLTokenProvider {
    getInitialState() {
        return new DPMXLState();
    }
    tokenize(line) {
        return tokensForLine(line);
    }
}
class DPMXLToken {
    constructor(ruleName, startIndex) {
        this.scopes = ruleName.toLowerCase() + '.dpm-xl';
        this.startIndex = startIndex;
    }
}
class DPMXLLineTokens {
    constructor(tokens) {
        this.endState = new DPMXLState();
        this.tokens = tokens;
    }
}
export function tokensForLine(input) {
    const errorStartingPoints = [];
    class ErrorCollectorListener {
        // tslint:disable-next-line:typedef
        syntaxError(_, _offendingSymbol, _line, column, _msg, _e) {
            errorStartingPoints.push(column);
        }
    }
    const inputStream = CharStreams.fromString(input);
    const lexer = new dpm_xlLexer(inputStream);
    lexer.removeErrorListeners();
    const errorListener = new ErrorCollectorListener();
    lexer.addErrorListener(errorListener);
    let done = false;
    const myTokens = [];
    do {
        const token = lexer.nextToken();
        if (token == null) {
            done = true;
        }
        else {
            // We exclude EOF
            if (token.type === EOF) {
                done = true;
            }
            else {
                const tokenTypeName = lexer.ruleNames[token.type - 1];
                const myToken = new DPMXLToken(tokenTypeName, token.charPositionInLine);
                myTokens.push(myToken);
            }
        }
    } while (!done);
    // Add all errors
    for (const e of errorStartingPoints) {
        myTokens.push(new DPMXLToken('error', e));
    }
    myTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1));
    console.log(myTokens);
    return new DPMXLLineTokens(myTokens);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRFBNWExUb2tlblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvbW9uYWNvLWVkaXRvci9EUE1YTFRva2VuUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFZixNQUFNLE9BQU8sVUFBVTtJQUNyQixLQUFLO1FBQ0gsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLGVBQWU7UUFDYixPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ25CLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQUVELE1BQU0sVUFBVTtJQUlkLFlBQVksUUFBZ0IsRUFBRSxVQUFrQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBRUQsTUFBTSxlQUFlO0lBSW5CLFlBQVksTUFBaUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBYTtJQUN6QyxNQUFNLG1CQUFtQixHQUFhLEVBQUUsQ0FBQztJQUN6QyxNQUFNLHNCQUFzQjtRQUMxQixtQ0FBbUM7UUFDbkMsV0FBVyxDQUFDLENBQU0sRUFBRSxnQkFBcUIsRUFBRSxLQUFVLEVBQUUsTUFBVyxFQUFFLElBQVMsRUFBRSxFQUFPO1lBQ3BGLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDO0tBQ0Y7SUFDRCxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELE1BQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzdCLE1BQU0sYUFBYSxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztJQUNuRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLE1BQU0sUUFBUSxHQUE4QixFQUFFLENBQUM7SUFDL0MsR0FBRztRQUNELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxpQkFBaUI7WUFDakIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN4RSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7S0FDRixRQUFRLENBQUMsSUFBSSxFQUFFO0lBQ2hCLGlCQUFpQjtJQUNqQixLQUFLLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixFQUFFO1FBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQU5UTFJFcnJvckxpc3RlbmVyIH0gZnJvbSAnYW50bHI0dHMnO1xuaW1wb3J0ICogYXMgbW9uYWNvIGZyb20gJ21vbmFjby1lZGl0b3InO1xuaW1wb3J0IElUb2tlbiA9IG1vbmFjby5sYW5ndWFnZXMuSVRva2VuO1xuaW1wb3J0IElMaW5lVG9rZW5zID0gbW9uYWNvLmxhbmd1YWdlcy5JTGluZVRva2VucztcbmltcG9ydCB7IENoYXJTdHJlYW1zIH0gZnJvbSAnYW50bHI0dHMnO1xuaW1wb3J0IHsgZHBtX3hsTGV4ZXIgfSBmcm9tICcuL2dyYW1tYXIvZHBtX3hsTGV4ZXInO1xuXG5jb25zdCBFT0YgPSAtMTtcblxuZXhwb3J0IGNsYXNzIERQTVhMU3RhdGUgaW1wbGVtZW50cyBtb25hY28ubGFuZ3VhZ2VzLklTdGF0ZSB7XG4gIGNsb25lKCk6IG1vbmFjby5sYW5ndWFnZXMuSVN0YXRlIHtcbiAgICByZXR1cm4gbmV3IERQTVhMU3RhdGUoKTtcbiAgfVxuXG4gIGVxdWFscygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRFBNWExUb2tlblByb3ZpZGVyIGltcGxlbWVudHMgbW9uYWNvLmxhbmd1YWdlcy5Ub2tlbnNQcm92aWRlciB7XG4gIGdldEluaXRpYWxTdGF0ZSgpOiBtb25hY28ubGFuZ3VhZ2VzLklTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEUE1YTFN0YXRlKCk7XG4gIH1cblxuICB0b2tlbml6ZShsaW5lOiBzdHJpbmcpOiBtb25hY28ubGFuZ3VhZ2VzLklMaW5lVG9rZW5zIHtcbiAgICByZXR1cm4gdG9rZW5zRm9yTGluZShsaW5lKTtcbiAgfVxufVxuXG5jbGFzcyBEUE1YTFRva2VuIGltcGxlbWVudHMgSVRva2VuIHtcbiAgc2NvcGVzOiBzdHJpbmc7XG4gIHN0YXJ0SW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihydWxlTmFtZTogc3RyaW5nLCBzdGFydEluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNjb3BlcyA9IHJ1bGVOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLmRwbS14bCc7XG4gICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnRJbmRleDtcbiAgfVxufVxuXG5jbGFzcyBEUE1YTExpbmVUb2tlbnMgaW1wbGVtZW50cyBJTGluZVRva2VucyB7XG4gIGVuZFN0YXRlOiBtb25hY28ubGFuZ3VhZ2VzLklTdGF0ZTtcbiAgdG9rZW5zOiBtb25hY28ubGFuZ3VhZ2VzLklUb2tlbltdO1xuXG4gIGNvbnN0cnVjdG9yKHRva2VuczogbW9uYWNvLmxhbmd1YWdlcy5JVG9rZW5bXSkge1xuICAgIHRoaXMuZW5kU3RhdGUgPSBuZXcgRFBNWExTdGF0ZSgpO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbnNGb3JMaW5lKGlucHV0OiBzdHJpbmcpOiBtb25hY28ubGFuZ3VhZ2VzLklMaW5lVG9rZW5zIHtcbiAgY29uc3QgZXJyb3JTdGFydGluZ1BvaW50czogbnVtYmVyW10gPSBbXTtcbiAgY2xhc3MgRXJyb3JDb2xsZWN0b3JMaXN0ZW5lciBpbXBsZW1lbnRzIEFOVExSRXJyb3JMaXN0ZW5lcjxhbnk+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxuICAgIHN5bnRheEVycm9yKF86IGFueSwgX29mZmVuZGluZ1N5bWJvbDogYW55LCBfbGluZTogYW55LCBjb2x1bW46IGFueSwgX21zZzogYW55LCBfZTogYW55KSB7XG4gICAgICBlcnJvclN0YXJ0aW5nUG9pbnRzLnB1c2goY29sdW1uKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgaW5wdXRTdHJlYW0gPSBDaGFyU3RyZWFtcy5mcm9tU3RyaW5nKGlucHV0KTtcbiAgY29uc3QgbGV4ZXIgPSBuZXcgZHBtX3hsTGV4ZXIoaW5wdXRTdHJlYW0pO1xuICBsZXhlci5yZW1vdmVFcnJvckxpc3RlbmVycygpO1xuICBjb25zdCBlcnJvckxpc3RlbmVyID0gbmV3IEVycm9yQ29sbGVjdG9yTGlzdGVuZXIoKTtcbiAgbGV4ZXIuYWRkRXJyb3JMaXN0ZW5lcihlcnJvckxpc3RlbmVyKTtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgY29uc3QgbXlUb2tlbnM6IG1vbmFjby5sYW5ndWFnZXMuSVRva2VuW10gPSBbXTtcbiAgZG8ge1xuICAgIGNvbnN0IHRva2VuID0gbGV4ZXIubmV4dFRva2VuKCk7XG4gICAgaWYgKHRva2VuID09IG51bGwpIHtcbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBleGNsdWRlIEVPRlxuICAgICAgaWYgKHRva2VuLnR5cGUgPT09IEVPRikge1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRva2VuVHlwZU5hbWUgPSBsZXhlci5ydWxlTmFtZXNbdG9rZW4udHlwZSAtIDFdO1xuICAgICAgICBjb25zdCBteVRva2VuID0gbmV3IERQTVhMVG9rZW4odG9rZW5UeXBlTmFtZSwgdG9rZW4uY2hhclBvc2l0aW9uSW5MaW5lKTtcbiAgICAgICAgbXlUb2tlbnMucHVzaChteVRva2VuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKCFkb25lKTtcbiAgLy8gQWRkIGFsbCBlcnJvcnNcbiAgZm9yIChjb25zdCBlIG9mIGVycm9yU3RhcnRpbmdQb2ludHMpIHtcbiAgICBteVRva2Vucy5wdXNoKG5ldyBEUE1YTFRva2VuKCdlcnJvcicsIGUpKTtcbiAgfVxuICBteVRva2Vucy5zb3J0KChhLCBiKSA9PiAoYS5zdGFydEluZGV4ID4gYi5zdGFydEluZGV4ID8gMSA6IC0xKSk7XG4gIGNvbnNvbGUubG9nKG15VG9rZW5zKTtcbiAgcmV0dXJuIG5ldyBEUE1YTExpbmVUb2tlbnMobXlUb2tlbnMpO1xufVxuIl19